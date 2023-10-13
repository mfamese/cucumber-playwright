module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["e2e/tests/features/"],
    dryRun: !true,
    require: [
      "e2e/tests/steps_definitions/**/*.ts",
      "support/hooks/hooks.ts",
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 5,
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    dryRun: false,
    require: [
      "e2e/tests/steps_definitions/**/*.ts",
      "e2e/tests/support/hooks/hooks.ts",
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 3,
  },
};
