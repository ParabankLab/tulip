import { Locator, Page } from '@playwright/test';

export class CheckOutStepTwoPage {

    private readonly page: Page;
    private readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
    }

    async clickOnFinishButton() {
        await this.finishButton.click();
    }

}