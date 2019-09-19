module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          "root": ["./"],
          "alias": {
          	"@resources": "./resources/res",
          	"@components": "./components",
          	"@pages": "./pages"
          },
        },
      ],
    ],
  };
};
