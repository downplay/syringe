export default ({ run }) => {
    run(
        "./packages/syringe-core",
        "./packages/syringe-formula-babel",
        "./packages/syringe-formula-npm-publish",
        "./packages/syringe-formula-react",
        "./packages/syringe-formula-react-app"
    );
};
