//Imports the 'test' function from Playwright library, used to define test cases
const { test } = require('@playwright/test');
//Imports the LoginPage class from the login.page.js file, located in the pages folder one level up
const { LoginPage } = require('../pages/login.page');
//Imports the InventoryPage class from the inventory.page.js file, located in the pages folder one level up
const { InventoryPage } = require('../pages/inventory.page');

test.describe('Inventory Tests', () => {

    test('Check button Menu', async ({page}) => {
     // new login page object and inventory page object in order to use their  methods
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
        //login
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertLoginSuccess();
        //menu button visible
        await inventoryPage.openBtn();
        await inventoryPage.assertMenuBtn
        //menu button not visible
        await inventoryPage.closeBtn();
        await inventoryPage.assertNoMenuBtn();
    })
})