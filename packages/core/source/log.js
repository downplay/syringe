import inject from "./inject";
import { ILogger } from "./symbols";

export default (message, params, injections) =>
    inject({ logger: ILogger })(({ logger }) => {
        logger(message, params);
    });
