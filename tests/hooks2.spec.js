
const {test, expect}= require('@playwright/test')

let page;
//BeforeEach
test.beforeEach(async ({browser})=>{
page= await browser.newPage();

//login    
await page.goto('https://www.demoblaze.com/')
await page.locator('//a[@id="login2"]').click()
await page.locator('//input[@id="loginusername"]').fill('pavanol')
await page.locator('//input[@id="loginpassword"]').fill('test@123')
await page.locator("//button[normalize-space()='Log in']").click()

});

//AfterEach
test.afterEach(async()=>{
    await page.locator("//a[@id='logout2']").click()
});


//homepage product count
test.only('hookshomepage', async ()=>{
const products= await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']")
expect (products).toHaveLength(9)
});

//Add to cart product
test.only('hooksaddtocart', async ()=>{
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator("//a[normalize-space()='Add to cart']").click()

page.on('dialog', async dialog=>{
    expect(dialog.message).toContain('Product added.')
    await dialog.accept()
})

});

