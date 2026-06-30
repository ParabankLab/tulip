import { Locator, Page } from '@playwright/test';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';

export class CartPage {
    private readonly page: Page;
    private readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }


    async navigate() {
        await this.page.goto(SauceDemoUtils.buildUrl(Endpoints.CART));
        await this.page.waitForURL(SauceDemoUtils.buildUrl(Endpoints.CART));
    }


    public getPage() {
        return this.page;
    }
}