import { Locator, Page } from '@playwright/test';
import { SauceDemoUtils } from '../utils/SauceDemoUtils.js';
import { Endpoints } from '../utils/SauceDemoUtils.js';

export class InventoryPage {
    private readonly page: Page;
    private readonly inventoryItems: Locator;
    private readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // The common container for every single item card on the page
        this.inventoryItems = page.locator('.inventory_item');
        // The global shopping cart badge icon link
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async navigate() {
        await this.page.goto(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));
        await this.page.waitForURL(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));
    }

    async addItemToCartByName(itemName: string) {
        const itemCard = this.inventoryItems.filter({ hasText: itemName });
        await itemCard.getByRole('button', { name: 'Add to cart' }).click();
    }

    async removeItemByName(itemName: string) {
        const itemCard = this.inventoryItems.filter({ hasText: itemName });
        await itemCard.getByRole('button', { name: 'Remove' }).click();
    }

    async goToCart() {
        await this.cartButton.click();
    }

    getPage() {
        return this.page;
    }
}