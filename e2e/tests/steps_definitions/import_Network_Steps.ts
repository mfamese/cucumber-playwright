import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../../../support/pages/homePage";
import Assert from "../../../support/wrapper/assert";
import { fixture } from "../../../support/hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 5)

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

Given("enters {string}", async function (networkNumber: string) {
    await homepage.inputNetwork(networkNumber);
});

Given("clicks the search button", async function () {
    await homepage.searchBtn();
});

When("the user clicks the load button", async function () {
    await homepage.loadBtn();
});
Then(
    "the user should see network imported on the screen",
    async function () {

    }
);
