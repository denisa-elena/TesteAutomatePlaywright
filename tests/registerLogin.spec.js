const { test } = require('@playwright/test');
const { RegisterLoginPage } = require('../pages/registerLogin.page');

test.describe('Register Tests', () => {
    let registerLogin;
    let sharedPage;

    test.beforeAll(async ({ browser }) => {
        sharedPage = await browser.newPage(); // create shared page
        registerLogin = new RegisterLoginPage(sharedPage);
    });

    test.afterAll(async () => {
        await sharedPage.close(); // close page after all tests finish
    });

    test('Register, Login and Logout', async () => {
        await registerLogin.registerNewUser();  // register -> auto login
        await registerLogin.assertNewUser();
        
        await registerLogin.logoutUser();       // logout
        await registerLogin.assertLogOut();
        
        await registerLogin.loginWithNewUser(); // login again
        await registerLogin.assertLogIn();
        
        await registerLogin.logoutUser();       // final logout
        await registerLogin.assertLogOut();
    });

});