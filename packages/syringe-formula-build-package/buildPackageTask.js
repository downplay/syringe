import { IBabelConfig } from "../syringe-formula-babel";

const npmPublishTask = ({ babelConfig }) => {};

export default inject({ babelConfig: IBabelConfig })(npmPublishTask);
