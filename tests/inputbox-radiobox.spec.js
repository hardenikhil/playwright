const {test, expecte, expect} =require('@playwright/test')

test('inputbox', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//check first name input box is visible
expect(await page.locator("//input[@id='name']")).toBeVisible();
expect(await page.locator("//input[@id='name']")).toBeEditable();
expect(await page.locator("//input[@id='name']")).toBeEmpty();

//enter first name
await page.fill("//input[@id='name']",'nikhil');

//check radio button
await page.check("//input[@id='male']");

//check radiobutton is checked or not
expect (await page.locator("//input[@id='male']")).toBeChecked();
expect (await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

//check checkbox is checked or not
await page.check("//input[@id='sunday']");
expect (await page.locator("//input[@id='sunday']")).toBeChecked();

//Multiple checkbox checked
const checkboxlocator=[
    "//input[@id='sunday']", "//input[@id='saturday']", "//input[@id='friday']"
];

for(const locator of checkboxlocator){
    await page.locator(locator).check();
    //To uncheck multiple checkbox
    //if(await page.locator(locator).ischecked(){ 
             //await page.locator(locator).uncheck();
    //}
    
}

await page.waitForTimeout(5000);

})