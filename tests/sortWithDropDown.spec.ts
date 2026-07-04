import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';


let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach('Open SauceDemo Site', async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
});

test.describe('Sort Items on Inventory Page', () => {

    test('TEST-03 - Sort Items on Inventory Page', async ({page}) => {
        await loginPage.login();
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));

        // 1. Validate Alphabetical (A to Z)
        await inventoryPage.sortItems('az');
        const actualAZ = await inventoryPage.getAllProductTitles();
        const expectedAZ = [...actualAZ].sort((a, b) => a.localeCompare(b));
        expect(actualAZ).toEqual(expectedAZ);

        // 2. Validate Reverse Alphabetical (Z to A)
        await inventoryPage.sortItems('za');
        const actualZA = await inventoryPage.getAllProductTitles();
        const expectedZA = [...actualZA].sort((a, b) => b.localeCompare(a));
        expect(actualZA).toEqual(expectedZA);

        // 3. Validate Price (Low to High)
        await inventoryPage.sortItems('lohi');
        const actualPriceLohi = await inventoryPage.getAllProductPrices();
        const expectedPriceLohi = [...actualPriceLohi].sort((a, b) => a - b);
        expect(actualPriceLohi).toEqual(expectedPriceLohi);

        // 4. Validate Price (High to Low)
        await inventoryPage.sortItems('hilo');
        const actualPriceHilo = await inventoryPage.getAllProductPrices();
        const expectedPriceHilo = [...actualPriceHilo].sort((a, b) => b - a);
        expect(actualPriceHilo).toEqual(expectedPriceHilo);
    });

});
