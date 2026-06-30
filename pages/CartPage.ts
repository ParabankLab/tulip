import { Locator, Page } from '@playwright/test';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';

export class CartPage {
    private readonly page: Page;
    private readonly checkoutButton: Locator;
    readonly itemsInCart: Locator; // Remove private
    readonly cartBadge: Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.itemsInCart = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }

    async navigate() {
        await this.page.goto(SauceDemoUtils.buildUrl(Endpoints.CART));
        await this.page.waitForURL(SauceDemoUtils.buildUrl(Endpoints.CART));
    }

    async numberOfItemsInChart() {
        const items = await this.itemsInCart.all();
        return items.length;
    }

    async removeItemByName(itemName: string) {
        const itemCard = this.itemsInCart.filter({ hasText: itemName });
        await itemCard.getByRole('button', { name: 'Remove' }).click();
    }


    public getPage() {
        return this.page;
    }
}