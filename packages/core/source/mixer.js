import { Injectable } from "./inject";

const execute = async (formula, context) => {
    let nextContext = context;
    if (formula instanceof Injectable) {
        const outcome = await formula.inject(context);
        nextContext = Object.assign({}, nextContext, outcome);
    } else if (Array.isArray(formula)) {
        for (const ingredient of formula) {
            const outcome = await execute(ingredient, context);
            nextContext = Object.assign({}, nextContext, outcome);
        }
    } else if (typeof formula === "function") {
        const outcome = await formula(context);
        if (outcome) {
            nextContext = Object.assign({}, nextContext, outcome);
        }
    } else {
        throw new TypeError(`Unhandled type of formula: ${typeof formula}`);
    }
    return nextContext;
};

const mix = (initialContext = {}, formula) => execute(formula, initialContext);

export default mix;
