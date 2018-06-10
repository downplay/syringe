const args = process.argv;
const jobName = args[2] || "build";

export default ({ load, run }) => {
    return [
        load(
            "./packages/core",
            "./packages/formula-babel",
            "./packages/formula-npm-publish",
            "./packages/formula-react",
            "./packages/formula-react-app"
        ),
        run(jobName)
    ];
};
