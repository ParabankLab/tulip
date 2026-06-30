import fs from 'node:fs';
import path from 'node:path';

export const Endpoints = {
    INVENTORY: 'inventory.html',
    CART: 'cart.html',
    CHECKOUT_COMPLETE: 'checkout-complete.html',
    CHECKOUT_STEP_ONE: 'checkout-step-one.html',
    CHECKOUT_STEP_TWO: 'checkout-step-two.html',
} as const;

export type EndpointType = typeof Endpoints[keyof typeof Endpoints];

export class SauceDemoUtils {
    public static readonly BASE_URL: string = "https://www.saucedemo.com/";
    public static readonly CHECKOUT_COMPLETE = "Checkout: Complete!";


    public static buildUrl(endpoint: EndpointType): string {
        return this.BASE_URL + endpoint;
    }

    public static getTestData() {
        const dataPath = path.resolve(process.cwd(), 'testdata', 'testData.json');
        return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    }



}