import { Locator, Page } from '@playwright/test';
import { SauceDemoUtils } from '../utils/SauceDemoUtils.js';

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
        await this.userName.fill(SauceDemoUtils.getTestData().user[0].name);
        await this.passWord.fill(SauceDemoUtils.getTestData().user[0].password);
        await this.loginButton.click();
    }

    async navigate() {
        await this.page.goto(SauceDemoUtils.BASE_URL);
        await this.page.waitForURL(SauceDemoUtils.BASE_URL);
    }


    public getPage() {
        return this.page;
    }
}