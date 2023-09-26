const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation report",
  pageTitle: "ConnectLV",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "EA-Rl7b95CJJa5X",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "ConnectLV" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "smoke-test" },
    ],
  },
});