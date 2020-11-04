module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    iconPaths: {
      favicon32: './favicon.png',
      appleTouchIcon: 'favicon.png',
      maskIcon: 'favicon.png',
      msTileImage: 'favicon.png',
      },
    workboxOptions: {
      swSrc: "src/registerServiceWorker.js"
    }
  }
};
