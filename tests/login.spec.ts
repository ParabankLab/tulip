import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { Endpoints, SauceDemoUtils } from '../utils/SauceDemoUtils.js';


let loginPage: LoginPage;

test.beforeEach('Open SauceDemo Site', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test.describe('Login To SauceDemo', () => {

    test('TC-POS-01 - should successfully login to saucedemo', async () => {
    //Act
    await loginPage.login();
    // Assert
    await expect(loginPage.getPage()).toHaveURL(SauceDemoUtils.buildUrl(Endpoints.INVENTORY));

  });

});
