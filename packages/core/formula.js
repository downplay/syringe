import buildPackageJson from "../syringe-formula-build-package/source/buildPackageJson";

const definition = {
  name: "syringe" // Note: Could be inferred from folder
};

export default ({ job }) => [
  package(definition),
  job("build", ({ package }) => [
    buildPackageJson,
    copySourceFiles,
    publishToNpm
  ])
];
