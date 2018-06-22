import { Injectable } from "./inject";
import combineContexts from "./combineContexts";

const execute = async (formula, context) => {
    let nextContext = context;
    if (formula instanceof Injectable) {
        const outcome = await formula.inject(context);
        nextContext = combineContexts([nextContext, outcome]);
    } else if (Array.isArray(formula)) {
        for (const ingredient of formula) {
            const outcome = await execute(ingredient, context);
            nextContext = combineContexts([nextContext, outcome]);
        }
    } else if (typeof formula === "function") {
        const outcome = await formula(context);
        if (outcome) {
            nextContext = await execute(outcome, context);
        }
    } else {
        throw new TypeError(`Unhandled type of formula: ${typeof formula}`);
    }
    return nextContext;
};

const mix = (initialContext = {}, formula) => execute(formula, initialContext);

export default mix;
