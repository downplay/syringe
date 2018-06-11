import path from "path";
import inject from "./inject";
import { IRootPath, ILoader } from "./symbols.js";

const load = packageList =>
    inject({ rootPath: IRootPath }, ILoader)(async ({ rootPath }) => {
        for (const name of packageList) {
            // Slightly naieve check to see if loading external or internal dep
            if (name.indexOf(".") === 0) {
                const packageFormula = await import(path.resolve(
                    rootPath,
                    name
                ));
            }
        }
    });

export default load;
