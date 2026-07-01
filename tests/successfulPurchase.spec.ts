import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckOutStepOnePage } from '../pages/CheckOutStepOnePage.js';
import { CheckOutStepTwoPage } from '../pages/CheckOutStepTwoPage.js';
import { CheckOutComplete } from '../pages/CheckOutComplete.js';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';


let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkOutStepOnePage: CheckOutStepOnePage;
let checkOutStepTwoPage: CheckOutStepTwoPage;
let checkOutComplete: CheckOutComplete;

test.beforeEach('Open SauceDemo Site', async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkOutStepOnePage = new CheckOutStepOnePage(page);
    checkOutStepTwoPage = new CheckOutStepTwoPage(page);
    checkOutComplete = new CheckOutComplete(page);
    await loginPage.navigate();
});

test.describe('Successful Purchase At SauceDemo', () => {

    test('TEST-01 - Successfull Purchase At Saucedemo', async () => {
        //Act
        await loginPage.login();
        // Assert
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));

        //Act 
        await inventoryPage.addItemToCartByName("Sauce Labs Backpack");
        await inventoryPage.addItemToCartByName("Sauce Labs Bolt T-Shirt");
        await inventoryPage.addItemToCartByName("Sauce Labs Fleece Jacket");
        await inventoryPage.goToCart();
        //Assert
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.CART));

        //Act
        await cartPage.clickOnCheckoutButton();
        //Assert
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.CHECKOUT_STEP_ONE));

        //Act
        await checkOutStepOnePage.fillOutAndContinue();
        //Assert 
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.CHECKOUT_STEP_TWO));

        //Act
        await checkOutStepTwoPage.clickOnFinishButton();
        //Assert
        await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.CHECKOUT_COMPLETE));
        await expect(checkOutComplete.getTitle()).toHaveText(SauceDemoUtils.CHECKOUT_COMPLETE);




    });

});
