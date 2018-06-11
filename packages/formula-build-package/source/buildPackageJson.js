import fs from "fs-extra";
import path from "path";
import { inject } from "../../core/source";
import { ISource } from "./symbols";
import { IPackage, IRootPackage } from "../../core/source/symbols";

const buildPackageJson = async ({
    packageOptions,
    buildVersion,
    buildFolder,
    rootPackage,
    source
}) => {
    const { name, ...rest } = packageOptions;
    const packageJson = {
        ...packageOptions,
        name,
        version: buildVersion
    };
    await fs.writeJson(path.join(buildFolder, "package.json"), packageJson);
};

export default () =>
    inject({
        packageOptions: IPackage,
        rootPackage: IRootPackage,
        source: ISource,
        buildFolder: IBuildFolder,
        buildVersion: IBuildVersion,
        transforms: [IPackageJsonTransform]
    })(buildPackageJson);
