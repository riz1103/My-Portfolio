module.exports = {
  presets: [
    [
      "@vue/app",
      {
        // Disable automatic polyfill injection to avoid missing core-js modules
        useBuiltIns: false
      }
    ]
  ]
};
