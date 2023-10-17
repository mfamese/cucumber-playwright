import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../../../support/pages/homePage";
import Assert from "../../../support/wrapper/assert";
import { fixture } from "../../../support/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 10)

let assert: Assert;
let homepage: HomePage;

Given("a user visits ConnectLV homepage", async function () {
    homepage = new HomePage(fixture.page);
    assert = new Assert(fixture.page);
    await homepage.navigateToHomePage();
});
Given("the user selects file", async function () {
    await homepage.selectfile();
});
Given("selects import network", async function () {
    await homepage.selectImportNetwork();
});
Given("enters valid network number as {string}", async function (networkNumber: string) {
    await homepage.inputNetwork(networkNumber);
});
Given("click the search button", async function () {
    await homepage.searchBtn();
});

When("the user click the load button", async function () {
    await homepage.loadBtn();
});
Then(
    "the user should see network imported on the screen",
    async function () {
});

When("the user enters invalid network number as {string}", async function (number) {
    await homepage.inputNetwork(number);
});
Then('the user should the alert {string} on the screen', async function (messageType) {
    homepage.errorValidation(messageType);
});

When('the user click the run Assesment button', async function () {
    await homepage.clickRunAssesmentBtn();
});
When('user accept the alert message', async function () {
});
Then('user should see network assessmet on the screen', async function () {
});

When('the user click the Calculate button', async function () {
    homepage.clickCalculateBtn();
});
Then('user should see the Network Data on the screen', async function () {
});
