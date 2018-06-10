import fs from "fs-extra";
import inject from "../../core/source/inject";

const createDistFolderTask = async ({
    basePath,
    distFolderName = "dist"
}) => {};

const createDistFolder = inject({
    basePath: IPackagePath,
    distFolderName: IBuildFolderName
});

export default createDistFolder;
