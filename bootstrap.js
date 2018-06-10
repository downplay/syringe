import path from "path";

import formula from "./formula";
import { mixer, IRootPath } from "./packages/core/source";

const rootPath = path.resolve();

/**
 * Bootstrap syringe into existence
 */
const syringe = mixer({ [IRootPath]: rootPath }, formula);
