import inject from "./inject";
import mix from "./mixer";
import { IRootPath, IJobProvider } from "./symbols.js";
import combineContexts from "./combineContexts";

const run = jobName =>
    inject({ jobs: [IJobProvider] })(async ({ jobs }, context) => {
        // Jobs are run in parallel
        const results = Promise.all(jobs.map(job => job(jobName, context)));
        const nextContext = combineContexts([context, ...results]);
        if (nextContext === context) {
            throw new Error(`Job ${jobName} did not produce any effects`);
        }
    });

export default run;
