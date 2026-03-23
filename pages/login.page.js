//import the function expect used for assert
const {expect} = require('@playwright/test');

class LoginPage{
    constructor(page) {
        this.page = page;
    }

    //selectors

    get usernameInput() {
        return this.page.locator('#user-name');
    }

    get passwordInput(){
        return this.page.locator('#password');
    }

    get loginBtn() {
        return this.page.locator('[data-test="login-button"]');
    }

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async assertLoginSuccess(){
        await expect(this.page).toHaveURL(/inventory.html/);
    }

    async asserrtLoginError(){
        await expect(this.errorMessage).toBeVisible;
    }
}

module.exports = {LoginPage};
