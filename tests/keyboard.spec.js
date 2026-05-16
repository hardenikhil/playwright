
const {test, expect}= require('@playwright/test')

test('keyboard', async({page})=>{

page.goto("https://gotranscript.com/text-compare");

await page.locator("//textarea[@name='text1']").fill("welcome to automation");

await page.keyboard.press('Control+A');

await page.keyboard.press('Control+C');

await page.keyboard.down('Tab');
await page.keyboard.up('Tab');

await page.keyboard.press('Control+V');

await page.waitForTimeout(3000);

})