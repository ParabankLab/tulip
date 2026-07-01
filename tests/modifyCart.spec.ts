import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';


let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.beforeEach('Open SauceDemo Site', async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
});

test.describe('Modifying Cart At SauceDemo', () => {

    test('TEST-02 - Modifying Cart At Saucedemo', async () => {
        await loginPage.login();
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));

        // Act 
        await inventoryPage.addItemToCartByName("Sauce Labs Backpack");
        await inventoryPage.addItemToCartByName("Sauce Labs Bolt T-Shirt");
        await inventoryPage.addItemToCartByName("Sauce Labs Fleece Jacket");
        await inventoryPage.goToCart();

        // Assertions before deletion
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.CART));
        await expect(cartPage.itemsInCart).toHaveCount(3);
        await expect(cartPage.cartBadge).toHaveText('3');

        // Act - Remove an item
        await cartPage.removeItemByName("Sauce Labs Backpack");

        // Assertions after deletion
        await expect(cartPage.itemsInCart).toHaveCount(2);
        await expect(cartPage.cartBadge).toHaveText('2');

        // Assert that the specified remaining items remain untouched!
        await expect(cartPage.itemsInCart.filter({ hasText: "Sauce Labs Bolt T-Shirt" })).toBeVisible();
        await expect(cartPage.itemsInCart.filter({ hasText: "Sauce Labs Fleece Jacket" })).toBeVisible()

    });

});
