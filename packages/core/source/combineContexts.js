import { ContextEnumerables } from "./symbols";

const combineContexts = contexts => {
    let nextContext = contexts[0];
    for (const context of contexts) {
        if (context && context !== nextContext) {
            const newContext = {};
            Object.assign(newContext, nextContext);
            newContext[ContextEnumerables] = newContext[ContextEnumerables]
                ? newContext[ContextEnumerables].slice()
                : [];
            Object.keys(context).forEach(key => {
                newContext[key] = context[key];
                newContext[ContextEnumerables][key] = [
                    ...newContext[ContextEnumerables][key],
                    context[key]
                ];
            });
            nextContext = newContext;
        }
    }
    return nextContext;
};

export default combineContexts;
