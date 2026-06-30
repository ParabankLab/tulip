import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly userName: Locator;
    private readonly passWord: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.passWord = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login() {
        await this.userName.fill("standard_user");
        await this.passWord.fill("secret_sauce");
        await this.loginButton.click();
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/");
        await this.page.waitForURL("https://www.saucedemo.com/");
    }


    public getPage() {
        return this.page;
    }
}