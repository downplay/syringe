import { ContextEnumerables } from "./symbols";

export class Injectable {
    constructor(pattern, ejectables, subject) {
        this.pattern = pattern;
        this.ejectables = ejectables;
        this.subject = subject;
    }

    inject(context) {
        console.log(
            Object.keys(context)
                .map(key => key.toString())
                .join(" ")
        );
        const injected = this.pattern
            ? Object.keys(this.pattern).reduce((acc, key) => {
                  let dep = this.pattern[key];
                  let isArray = false;
                  if (Array.isArray(dep)) {
                      if (dep.length !== 1) {
                          throw new Error(
                              `Must have exactly one dep type, received ${dep.toString()}`
                          );
                      }
                      isArray = true;
                      [dep] = dep;
                  }
                  if (typeof dep !== "symbol") {
                      console.log(this.pattern);
                      throw new Error(
                          `Dependencies should be identified as Symbols , received ${dep.toString()}`
                      );
                  }
                  if (!Object.hasOwnProperty.call(context, dep)) {
                      throw new Error(`Dependency not met: ${dep.toString()}`);
                  }
                  acc[key] = isArray
                      ? context[ContextEnumerables][dep]
                      : context[dep];

                  return acc;
              }, {})
            : context;
        const ejected = this.subject(injected, context);
        // If single symbol, we returned the entire ejectable
        // Note: Eventually some interface/type checking with TypeScript or Flow or something else?
        if (typeof this.ejectables === "symbol") {
            return { ...context, [this.ejectables]: ejected };
        }
        // Otherwise a hashmap of ejectables
        // Note: Should check that what was ejected matched the interface
        // (if interface was undefined, at least check the keys are all symbols)
        return {
            ...context,
            ...ejected
        };
    }
}

const inject = (pattern, ejectables) => subject =>
    new Injectable(pattern, ejectables, subject);

export default inject;
