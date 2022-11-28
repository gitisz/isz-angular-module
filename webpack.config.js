const extendWebpack = require('piral-ng/extend-webpack');

module.exports = (config) => {
  config.entry["angular-app"] = './src/angular-app.tsx';
  return extendWebpack({
    ngOptions: {
      jitMode: true,
    },
  })(config);
};
