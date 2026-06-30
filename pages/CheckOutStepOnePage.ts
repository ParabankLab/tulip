import { Locator, Page } from '@playwright/test';

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

    getPage(){
        return this.page;
    }


}