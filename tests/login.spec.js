const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('Login tests' , () => {
    test('Succesfull login', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertLoginSuccess();
    });

    test('Error Login', async({page}) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('error_user', 'abc');
        await loginPage.assertLoginError();

    });
})