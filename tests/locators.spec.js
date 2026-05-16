//const {test, expect}= require('@playwright/test')
import {test, expect} from '@playwright/test'

test('locators', async({page})=>{

await page.goto('https://www.demoblaze.com/');

//click on login button
//page.locator("//a[@id='login2']").click();
await page.click("//a[@id='login2']");

//type username & password
await page.fill("//input[@id='loginusername']", "pavanol");
await page.fill("//input[@id='loginpassword']", 'test@123');

//click on login 
await page.click("//button[normalize-space()='Log in']");

//verify logout button is available
const logoutlink= page.locator("//a[@id='login2']");

await expect(logoutlink).toBeVisible();

await page.close();

})