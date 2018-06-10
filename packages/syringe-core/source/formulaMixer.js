import path from "path";

const mix = pathName => {
    const formula = require(path.join(pathName, "./syringe.formula.js"));
    const depends = (...deps) => {};
    formula({});
};

export default mix;
