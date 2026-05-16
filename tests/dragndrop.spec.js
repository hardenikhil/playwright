
const {test, expect}= require('@playwright/test')

test('dragndrop', async({page})=>{

    page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome= page.locator("//div[@id='box6']")
    const italy= page.locator("//div[@id='box106']")

    await rome.dragTo(italy)

    await page.waitForTimeout(5000)

})

