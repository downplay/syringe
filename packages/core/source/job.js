import inject from "./inject";
import mix from "./mixer";
import { IRootPath, IJobProvider } from "./symbols.js";

const job = (name, formula) =>
    inject(null, IJobProvider)(
        // TODO: Context or originalCOntext in the mix?
        originalContext => async (runJobName, context) => {
            if (runJobName === name) {
                const nextContext = await mix(originalContext, formula);
                return nextContext;
            }
            return null;
        }
    );

export default job;
