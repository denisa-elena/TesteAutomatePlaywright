const {expect} = require('@playwright/test');

class InventoryPage {
    //called automatically when you create a new instance of the class (new LoginPage(page))
    //stores the page object so it can be used in the entire class
    constructor(page) {
        this.page = page;

         //locators

         this.menuBtn = page.locator('#react-burger-menu-btn');
         this.closeMenuBtn = page.locator('#react-burger-cross-btn');
         this.btnVisible = page.locator('.bm-menu-wrap');
        
        
    }

    //methods

    async openBtn(){
        await this.menuBtn.click();
    }

    async closeBtn(){
        await this.closeMenuBtn.click();
    }

    //assertions
    async assertMenuBtn(){
        await expect(this.btnVisible).toBeVisible();
    }

    async assertNoMenuBtn(){
        await expect(this.btnVisible).not.toBeVisible();
    }

    }
    module.exports = {InventoryPage};

