import path from "path";
import inject from "./inject";
import { IRootPath, IRootPackage, IRootVersion } from "./symbols";

const rootPackage = async ({ rootPath }) => {
    // Get dependencies from root package
    const rootPackageJson = await import(path.resolve(
        rootPath,
        "package.json"
    ));
    return {
        [IRootPackage]: rootPackageJson
    };
};

export default inject(
    {
        rootPath: IRootPath
    },
    [IRootPackage, IRootVersion]
)(rootPackage);
