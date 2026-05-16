
const {test, expect, chromium}= require("@playwright/test")

test('multiwindow', async()=>{

const browser= await chromium.launch()   //using browser create a new context
const context= await browser.newContext() //with this create a new page
//context means compiletly new incognito browser

//created a two different pages
const page1= await context.newPage();

//now go to the website & click on the link to open new browser window
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


const newpromise= context.waitForEvent('page');
await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();


//switch to new window
const newpage2=await newpromise;
await expect(newpage2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses")

await newpage2.waitForTimeout(3000)

await browser.close();


})