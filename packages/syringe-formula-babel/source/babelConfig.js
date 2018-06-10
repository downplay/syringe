import { IBabelConfigTransform } from "./symbols";

const baseConfig = () => ({
    presets: ["babel-preset-env"],
    plugins: [
        "babel-plugin-transform-class-properties",
        "babel-plugin-transform-object-rest-spread"
    ]
});

const babelConfig = ({ transformers }) => {
    const config = baseConfig();
    transformers.forEach(transformer => {
        transformer({ [IBabelConfigInstance]: config });
    });
};

export default inject({ transformers: IBabelConfigTransform })(babelConfig);
