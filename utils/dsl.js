import { expect } from '@playwright/test';

export class DSL{
    constructor(page){
        this.page=page;
    }

    async clickByRole(obj){
        await this.page.getByRole(obj.role, obj.value ).click();
    }

    async clickByXpath(obj){
        await this.page.locator(obj).click();
    }

    async validarTextoNoObjeto(obj, txt){
       await expect(this.page.locator(obj)).toContainText(txt);
    }
}