const {test, expecte, expect} =require('@playwright/test');
const exp = require('node:constants');

test('inputbox', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//Multiple ways to select drop down 
await page.selectOption('India'); //By text
await page.locator("//select[@id='country']").selectOption({value: 'India'});//by value
await page.locator("//select[@id='country']").selectOption({label: 'UK'});//by label
await page.locator("//select[@id='country']").selectOption({index:1});//by index

const options= await page.$$("//select[@id='country']")
for(const option of options){
    console.log(option.textContent());
}

//select multiple option from drop down
await page.selectOption("//select[@id='colors']",['Blue', 'Red'])

//check numbers of option in dropdown
const dropdownlist= await page.locator("//select[@id='colors']")
await expect(dropdownlist).toHaveCount(5);

})