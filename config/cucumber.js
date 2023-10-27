module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["e2e/tests/features/"],
    dryRun: !true,
    defaultCommandTimeout: 10000,
    execTimeout: 10000,
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
    paths: ["e2e/tests/features/"],
    dryRun: !true,
    defaultCommandTimeout: 10000,
    execTimeout: 10000,
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
};
