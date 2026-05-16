
const {test, expect}= require ('@playwright/test')

test('handleframes',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const iframe1= await page.frameLocator("//frame[@src='frame_1.html']").locator("(//input[@name='mytext1'])[1]")
    iframe1.fill("nikhil")

    page.waitForTimeout(4000);

})  