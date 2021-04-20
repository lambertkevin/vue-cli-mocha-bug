const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve("src", "assets", "test-location")],
        },
      },
    },
  },
};
