import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../wrapper/playwrightWrappers";
import { BASEURL } from "../../config/config";
import { fixture } from "../hooks/pageFixture";

export default class HomePage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        inputNetworkNumber: "input#substation-search"
    }

    async navigateToHomePage() {
        await this.base.goto(BASEURL);
        await expect(this.page).toHaveTitle("Connect/LV");
    }
    async selectfile() {
        await fixture.page.locator("button#btnFileTab").click();
    }
    async selectImportNetwork() {
        await fixture.page.locator(".tab-content .row:nth-of-type(1) .file-section").click();
        // await fixture.page.pause();
    }

    async inputNetwork(networkNumber: string) {
        await fixture.page.getByPlaceholder('Search for a Network').fill(networkNumber);
    }

    async searchBtn() {
        await fixture.page.locator("#btnSearchSub").click();
    }

    async loadBtn() {
        await fixture.page.locator(".flex-fill .btn-sm:nth-of-type(2)").click();
    }

}