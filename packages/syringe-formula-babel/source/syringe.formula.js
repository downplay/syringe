import { IBabelConfig, IBabelConfigTransform } from "./symbols";

export default ({ inject, depends, exports }) => {
    depends(
        "babel-preset-env",
        "babel-plugin-transform-class-properties",
        "babel-plugin-transform-object-rest-spread"
    );
    inject(IBabelConfig);
};
