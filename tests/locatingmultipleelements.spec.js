const {test, expect} = require('@playwright/test');

test('locatingmultipleelements', async({page})=>{

await page.goto('https://www.demoblaze.com/');

const links= await page.$$('a');

//To get all product name from page
//const products= await page.$$("//div[@id='tbodyid']//div//h4//a");

 for(const link of links)
 {
    const getlinks= await link.textContent();
    console.log(getlinks);
 }

})