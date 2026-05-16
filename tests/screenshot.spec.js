
const {test, expect} = require('@playwright/test')

test('screenshot', async({page})=>{

await page.goto('https://www.opencart.com/')
await page.screenshot({path:'tests/screenshots/homepage.png',fullPage:true})
})

//For dynamic homepage name
test.only('screenshot dynamic', async({page})=>{
await page.goto('https://www.opencart.com/')
await page.screenshot({path:'tests/screenshots/'+Date.now()+ 'homepage.png'})
})

//Screenshot of element
test.only('screenshot dynamic', async({page})=>{
await page.goto('https://www.opencart.com/')
await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({path:'tests/screenshots/'+Date.now()+ 'homepage.png'})

})
