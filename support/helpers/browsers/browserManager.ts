import { LaunchOptions, chromium, firefox, webkit, } from "@playwright/test";
import msedge from "@playwright/test"


const options: LaunchOptions = {
  headless: false,
};
export const invokeBrowser = () => {
  const browserType = process.env.BROWSER;
  switch (browserType) {
    case "chrome":
      return chromium.launch(options);
    case "firefox":
      return firefox.launch(options);
    case "webkit":
      return webkit.launch(options);
    case "msedge":
      return chromium.connectOverCDP({ ...options, wsEndpoint: 'your-edge-ws-endpoint' });

    default:
      throw new Error("Please set the proper browser: " + browserType)
  }
};
