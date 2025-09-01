const { withDangerousMod } = require("@expo/config-plugins");

module.exports = function withNativeCameraPlugin(config) {
  return withDangerousMod(config, ["android", async (config) => {
    console.log("✅ [native-camera-expo-plugin] Plugin is running during prebuild");
    return config;
  }]);
};
