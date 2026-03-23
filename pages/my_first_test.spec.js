
const {test, expect} = require('@playwright/test')

test('My  first test' , async ({page}) => {
    //async returns a promise
    //await function wait for promise
    //wait until this step is executed and after goes to the next one
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    })