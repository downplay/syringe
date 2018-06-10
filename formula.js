import inject from "./packages/core/source/inject.js";
import { ILoader } from "./packages/core/source/symbols.js";

const args = process.argv;
const jobName = args[2] || "build";

const formula = async ({ load, run }) => {
    await load(
        "./packages/core",
        "./packages/formula-babel",
        "./packages/formula-npm-publish",
        "./packages/formula-react",
        "./packages/formula-react-app"
    );
    await run(jobName);
};

export default inject({ load: ILoader, run: IJobRunner });
