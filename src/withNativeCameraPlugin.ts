import { ConfigPlugin, withDangerousMod } from "@expo/config-plugins"

const withNativeCameraPlugin: ConfigPlugin = config => {
  return withDangerousMod(config, ["android", async config => {
    //@ts-ignore
    console.log("✅ [native-camera-expo-plugin] Plugin is running during prebuild")
    return config
  }])
}

export default withNativeCameraPlugin
