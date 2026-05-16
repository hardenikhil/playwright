
const {test, expect}= require('@playwright/test')

test('webtable', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table= page.locator("//table[@id='productTable']")

const columns= await table.locator("//table[@id='productTable']/thead/tr/th")
console.log('number of columns are', await columns.count())


const rows= await table.locator("//table[@id='productTable']/tbody/tr")
console.log('number of row', await rows.count())

})