import path from "path";
import run from "./run";
import load from "./load";
import { IRootPath } from "./symbols";

const execute = async (formula, context) => {
    if (formular instanceof Injectable) {
        const outcome = await formular.inject(context);
        const nextContext = Object.assign({}, context);

    }
};

const mix = (initialContext, formula) => {
    const context = { ...initialContext };
    return execute(formula, context);
};

export default mix;
