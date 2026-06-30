import { Locator, Page } from '@playwright/test';
import { SauceDemoUtils } from '../utils/SauceDemoUtils.js';
import { Endpoints } from '../utils/SauceDemoUtils.js';

export class InventoryPage {
    private readonly page: Page;
    private readonly inventoryItems: Locator;
    private readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
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

    async getAllProductTitles(): Promise<string[]> {
        const cards = await this.inventoryItems.all();
        const titles: string[] = [];
        for (const card of cards) {
            const title = await card.locator('.inventory_item_name').innerText();
            titles.push(title.trim());
        }
        return titles;
    }

    async getAllProductPrices(): Promise<number[]> {
        const cards = await this.inventoryItems.all();
        const prices: number[] = [];
        for (const card of cards) {
            const priceRaw = await card.locator('.inventory_item_price').innerText();
            prices.push(parseFloat(priceRaw.replace('$', '')));
        }
        return prices;
    }

    getPage() {
        return this.page;
    }
}