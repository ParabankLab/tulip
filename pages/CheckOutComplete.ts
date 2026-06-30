import { Locator, Page } from '@playwright/test';

export class CheckOutComplete {

    private readonly page: Page;
    private readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
    }

   getTitle() {
        return this.title;
    }
}