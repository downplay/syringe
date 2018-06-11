// Based on:
// https://github.com/utatti/js-to-mjs
// MIT License
// Copyright (c) 2017 Hyunje Jun

const babylon = require("babylon");
const { readFileSync, existsSync } = require("fs");
const { dirname, extname, resolve } = require("path");

function find(path) {
    const imports = parseImports(path);
    const dir = dirname(path);

    const recImports = imports
        .filter(i => i.startsWith("."))
        .map(p => {
            const path = resolve(dir, p);
            if (extname(path)) {
                return path;
            } else if (existsSync(`${path}.mjs`)) {
                return `${path}.mjs`;
            } else if (existsSync(`${path}.js`)) {
                return `${path}.js`;
            }
            return path;
        })
        .reduce((res, path) => res.concat(find(path)), []);

    if (extname(path) === ".mjs") {
        return recImports;
    }
    return [path].concat(recImports);
}

function parseImports(path) {
    let ast;

    try {
        const js = readFileSync(path).toString();
        ast = babylon.parse(js, {
            sourceType: "module",
            plugins: ["dynamicImport"]
        });
    } catch (err) {
        console.log(`Failed to parse: ${path}`);
        console.log(err);
        return [];
    }

    const imports = [];

    traverse(ast.program, node => {
        if (node.type === "ImportDeclaration") {
            imports.push(node.source.value);
            return;
        }

        if (
            node.type === "ExportAllDeclaration" ||
            (node.type === "ExportNamedDeclaration" && node.source)
        ) {
            imports.push(node.source.value);
            return;
        }

        if (node.type === "ExpressionStatement") {
            const expr = node.expression;

            if (
                expr.type === "CallExpression" &&
                expr.callee.type === "Import"
            ) {
                const target = expr.arguments[0];

                if (target.type === "StringLiteral") {
                    imports.push(target.value);
                }
            }
        }
    });

    return imports;
}

function traverse(ast, f) {
    f(ast);

    if (Array.isArray(ast)) {
        ast.forEach(node => traverse(node, f));
    } else if (ast.body) {
        traverse(ast.body, f);
    }
}

module.exports = find;
