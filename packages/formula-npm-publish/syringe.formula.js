export default ({ task, depends }) => {
    depends("syringe-formula-babel");
    task();
};
