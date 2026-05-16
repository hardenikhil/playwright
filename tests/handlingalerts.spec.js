import { expect, test } from "@playwright/test"

test('alerts', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Test 1st
page.on('dialog' , async dialog=>{
//Enable alert handling before clicking on alert button
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
})
await page.click("//button[@id='alertBtn']");
await page.waitForTimeout(5000);
await page.goto("https://testautomationpractice.blogspot.com/");

//Test 2nd
page.on('dialog' , async dialog=>{
//Enable alert handling before clicking on alert button
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept();
    await dialog.dismiss();
})
await page.click("//button[@id='alertBtn']");
await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
await page.waitForTimeout(5000);

//Test 3rd Prompt alert
page.on('dialog' , async dialog=>{
    //Enable alert handling before clicking on alert button
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toHaveText('Haary Potter');
        await dialog.accept('john');
        await dialog.dismiss();
    })
    await page.click("//button[@id='alertBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);


})