import { load, run, logger } from "./packages/core/source";

const args = process.argv;
const jobName = args[2] || "build";

const formula = () => [
    logger(),
    load(
        "./packages/core",
        "./packages/formula-babel",
        "./packages/formula-npm-publish",
        "./packages/formula-react",
        "./packages/formula-react-app"
    ),
    run(jobName)
];

export default formula;
