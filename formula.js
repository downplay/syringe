const args = process.argv;
const jobName = args[2] || "build";

export default ({ load, run }) => {
    return [
        load(
            "./packages/syringe-core",
            "./packages/syringe-formula-babel",
            "./packages/syringe-formula-npm-publish",
            "./packages/syringe-formula-react",
            "./packages/syringe-formula-react-app"
        ),
        run(jobName)
    ];
};
