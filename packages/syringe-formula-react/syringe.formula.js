import { IBabelConfigTransform } from "syringe-forumular-babel";

import babelTransformReact from "./babelTransformReact";

export default ({ depends, inject }) => {
    depends("syringe-formula-babel", "babel-preset-react");
    inject(IBabelConfigTransform, babelTransformReact);
};
