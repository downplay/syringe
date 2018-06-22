import { job } from "./source/jobs";

import {
    definePackage,
    resolveSource,
    createDistFolder,
    buildPackageJson,
    copySourceToMjs,
    transpileSourceToCjs,
    publishToNpm
} from "../formula-build-package/source";

const definition = {
    name: "@syringe/core" // Note: Could be inferred from folder
};

export default () => [
    definePackage(definition),
    resolveSource(),
    job("build", () => [
        createDistFolder(),
        buildPackageJson(),
        copySourceToMjs(),
        transpileSourceToCjs(),
        publishToNpm()
    ])
];
