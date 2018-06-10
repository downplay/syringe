import { load, run } from "./packages/core/source/symbols.js";

const args = process.argv;
const jobName = args[2] || "build";

const formula = () => [
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
