import { Locator, Page } from '@playwright/test';
import { SauceDemoUtils } from '../utils/SauceDemoUtils.js';

export class CheckOutStepOnePage {

    private readonly page: Page;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postalCode: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async fillFirstName(input: string) {
        await this.firstName.fill(input);
    }

    async fillLastName(input: string) {
        await this.lastName.fill(input);
    }

    async fillPostalCode(input: string) {
        await this.postalCode.fill(input);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async fillOutAndContinue() {
        await this.firstName.fill(SauceDemoUtils.getTestData().checkout[0].firstname);
        await this.lastName.fill(SauceDemoUtils.getTestData().checkout[0].lastname);
        await this.postalCode.fill(SauceDemoUtils.getTestData().checkout[0].postalcode);
        await this.continueButton.click();
    }


    getPage() {
        return this.page;
    }




}