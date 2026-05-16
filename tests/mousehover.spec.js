
const {test, expect}= require('@playwright/test')

test('mousehover', async({page})=>{

    page.goto('https://demo.opencart.com.gr/')

    const desktop= await page.locator("//a[normalize-space()='Desktops']")
    const mac= await page.locator("//a[normalize-space()='Mac (1)']")

    //mouse hover
    await desktop.hover()
    await mac.click()

    await page.locator("//a[normalize-space()='Desktops']").hover();
    await page.locator("//a[normalize-space()='Mac (1)']").click();

    

    await page.waitForTimeout(4000)




})
