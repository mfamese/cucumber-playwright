import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../wrapper/playwrightWrappers";
import { BASEURL } from "../../config/config";

export default class HomePage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async navigateToHomePage() {
        await this.base.goto(BASEURL);
        await expect(this.page).toHaveTitle("Connect/LV");
    }
}