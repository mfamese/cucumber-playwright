import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../../support/hooks/pageFixture";
import Assert from "../../../support/wrapper/assert";
import HomePage from "../../../support/pages/homePage";

let assert: Assert;
let homepage: HomePage;

Given("a user wants to perform any task on connectLV", async function () {

});
When("the user access the connectLV url", async function () {
  homepage = new HomePage(fixture.page);
  assert = new Assert(fixture.page);
  await homepage.navigateToHomePage();
  
});
Then(
  "the user should be redirected to the connectLV homepage",
  async function () {
    await assert.assertURLContains("azurewebsites.net");
    await assert.assertTitle("Connect/LV");
  }
);
