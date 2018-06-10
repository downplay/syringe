import fs from "fs-extra";
import inject from "../../core/source/inject";

const createDistFolderTask = async ({ basePath, distFolderName = "dist" }) => {
    await fs.mkdir(path.resolve(pathPath, distFolderName));
};

const createDistFolder = inject({
    basePath: IPackagePath,
    distFolderName: IBuildFolderName
});

export default createDistFolder;
