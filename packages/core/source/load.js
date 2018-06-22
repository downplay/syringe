import path from "path";
import inject from "./inject";
import mix from "./mixer";
import { IRootPath } from "./symbols.js";

const load = (...packageList) =>
    inject({ rootPath: IRootPath })(async ({ rootPath }, context) => {
        let nextContext = context;
        for (const name of packageList) {
            // Slightly naieve check to see if loading external or internal dep
            if (name.indexOf(".") === 0) {
                const packageFormula = await import(path.resolve(
                    rootPath,
                    name,
                    "formula"
                ));
                nextContext = await mix(nextContext, packageFormula);
            }
        }
        return nextContext;
    });

export default load;
