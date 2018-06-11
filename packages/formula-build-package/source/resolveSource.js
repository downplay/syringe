import { IBabelConfig } from "../../formula-babel/source";
import { ISource } from "./symbols";
import { inject } from "../../core/source";
import find from "./vendor/find";

const resolveSource = ({ babelConfig, sourceName }) => {
    find();
};

export default () =>
    inject({ babelConfig: IBabelConfig }, ISourceName)(ISource)(resolveSource);
