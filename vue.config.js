module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/app.scss";`
      }
    }
  },
};
