
const {test, expect}= require('@playwright/test')

test('nestedframes',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const iframe3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    //await iframe3.locator("(//input[@name='mytext3'])[1]").fill("nikhil")
    //await page.waitForTimeout(4000)

    const childframe= await iframe3.childFrames()
    await childframe[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check()

    await page.waitForTimeout(4000)
})

