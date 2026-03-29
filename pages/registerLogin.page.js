const {expect} = require('@playwright/test');
const {faker} = require('@faker-js/faker');

class RegisterLoginPage{

    constructor (page) {
        this.page = page;


        this.data  = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email().toLowerCase(),
            address1: faker.location.streetAddress(),
            city: faker.location.city(),
            country: 'Romania',
            region: 'Bucuresti',
            zipCode: faker.location.zipCode('#####'),
            // build a stable username from first/last name to avoid version-specific faker methods
            loginName: `${faker.person.firstName().toLowerCase()}${faker.person.lastName().toLowerCase()}${Date.now().toString().slice(-4)}`,
            password: faker.internet.password({ length: 10 }),
            urlRegister: 'https://automationteststore.com/index.php?rt=account/create',
            urlLogin: 'https://automationteststore.com/index.php?rt=account/login'
        }

    //selectors
        this.selectors = {
            firstName: '#AccountFrm_firstname',
            lastName: '#AccountFrm_lastname',
            email: '#AccountFrm_email',
            address1: '#AccountFrm_address_1',
            city: '#AccountFrm_city',
            country: '#AccountFrm_country_id',
            region: '#AccountFrm_zone_id',
            zipCode: '#AccountFrm_postcode',
            loginName: '#AccountFrm_loginname',
            password: '#AccountFrm_password',
            confirm: '#AccountFrm_confirm',
            agree: '#AccountFrm_agree',
            continueBtn: 'button[title="Continue"]',
            loginNameInput: '#loginFrm_loginname',
            loginPasswordInput: '#loginFrm_password',
            loginBtn: 'button[title="Login"]',
            logoffBtn: '.side_account_list > :nth-child(10) > a'
    }}
    
    //methods
    async registerNewUser(){
        await this.page.goto('https://automationteststore.com/index.php?rt=account/create');
        await this.page.locator(this.selectors.firstName).fill(this.data.firstName);
        await this.page.locator(this.selectors.lastName).fill(this.data.lastName);
        await this.page.location(this.selectors.email).fill(this.data.email);
        await this.page.locator(this.selectors.address1).fill(this.data.address1);
        await this.page.locator(this.selectors.city).fill(this.data.city);
        await this.page.locator(this.selectors.country).fill(this.data.country);
        await this.page.locator(this.selectors.region).fill(this.data.region);
        await this.page.locator(this.selectors.zipCode).fill(this.data.zipCode);
        await this.page.locator(this.selectors.loginName).fill(this.data.loginName);
        await this.page.locator(this.selectors.password).fill(this.data.password);
        await this.page.locator(this.selectors.agree).check();
        await this.page.locator(this.selectors.continueBtnBtn).click();

    }

    async loginWithNewUser(){
        await this.page.goto('https://automationteststore.com/index.php?rt=account/login');
        await this.page.locator(this.selectors.loginNameInput).fill(this.data.loginName);
        await this.page.locator(this.selectors.loginPasswordInput).fill(this.data.loginPasswordInput);
        await this.page.locator(this.selectors.loginBtn).click();
    }

    async logoutUser() {
        await this.page.locacator(this.selectors.logoffBtn).click;

    }

    async assertNewUser(){
        await expect(this.page('Your Account Has Been Created!')).toBeVisible();
    }

    async assertLogIn() {
        await expect(this.page('My Account')).toBeVisible();
    }

    async assertLogOut(){
        await expect(this.page('Account Logout')).toBeVisible();
    }
}
 module.exports = {RegisterLoginPage};