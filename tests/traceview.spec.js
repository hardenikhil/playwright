//trace: "on-all-retries"
const {test, expect}= require('@playwright/test')

test('traceview', async({page})=>{

await page.goto('https://www.demoblaze.com/')

await page.click("//a[@id='login2']")
await page.fill("//input[@id='loginusername']", "pavanol")
await page.fill("//input[@id='loginpassword']", "test@123")
await page.click("//button[normalize-space()='Log in']")
const dashboard= await expect(page.locator("//a[@id='nameofuser']")).toHaveText("Welcome pavanol")
})
