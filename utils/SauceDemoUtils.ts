import fs from 'node:fs';
import path from 'node:path';


export const Endpoints = {
    INVENTORY: 'inventory.html',
    CART: 'cart.html'
} as const;

export type EndpointType = typeof Endpoints[keyof typeof Endpoints];

export class SauceDemoUtils {
    public static readonly BASE_URL: string = "https://www.saucedemo.com/";
    

    public static buildUrl(endpoint: EndpointType): string {
        return this.BASE_URL + endpoint;
    }

    public static getTestData() {
        const loginData = JSON.parse(fs.readFileSync(path.resolve("tulip", '../testdata/testData.json'), 'utf-8'));
        return loginData;
    }

  

}