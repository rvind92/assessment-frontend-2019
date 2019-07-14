module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-react", "@babel/preset-env"];
  const plugins = ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"];

  return {
    presets,
    plugins
  };
}
