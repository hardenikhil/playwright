
const {test, expect}= require('@playwright/test')

test('mouserightclick', async({page})=>{

await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

const button= page.locator("//span[@class='context-menu-one btn btn-neutral']")

await button.click({button: 'right'});

await page.locator("//span[normalize-space()='Copy']").click();

})