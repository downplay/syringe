import path from "path";
import run from "./run";
import load from "./load";

const mix = pathName => {
    const formula = require(path.join(pathName, "./formula.js")).default;
    // const depends = (...deps) => {};
    const context = { jobs: {} };

    formula(context);
};

export default mix;
