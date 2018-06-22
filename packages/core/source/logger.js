import inject from "./inject";
import { ILogger } from "./symbols";

export default () =>
    inject(null, ILogger)(() => (message, { level = "log" }) => {
        // eslint-disable-next-line no-console
        console[level](message);
    });
