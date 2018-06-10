import { isSymbol } from "util";

class Injectable {
    constructor(pattern, ejectables, subject) {
        this.pattern = pattern;
        this.ejectables = ejectables;
        this.subject = subject;
    }

    inject(context) {
        const injected = Object.keys(this.pattern).reduce((acc, key) => {
            const dep = this.pattern[key];
            if (typeof dep !== "symbol") {
                throw new Error(
                    "Dependencies should be identified as Symbols, received " +
                        dep.toString()
                );
            }
            if (!Object.hasOwnProperty.call(context, key)) {
                throw new Error("Dependency not met: " + key.toString());
            }
        }, {});
    }
}

const inject = (pattern, ejectables) => subject => {
    return new Injectable(pattern, ejectables, subject);
};

export default inject;
