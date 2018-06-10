const run = context => jobName => {
    if (!context.jobs[jobName]) {
        throw new Error("Job does not exist: " + jobName);
    }
};

export default run;
