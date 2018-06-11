import path from "path";

import formula from "./formula";
import { mixer, IRootPath } from "./packages/core/source";

const rootPath = path.resolve();

/**
 * Bootstrap syringe into existence
 */
mixer({ [IRootPath]: rootPath }, formula)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
