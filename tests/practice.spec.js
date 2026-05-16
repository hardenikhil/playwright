const {test, expect}= require("@playwright/test")


test.describe('group1', ()=>{
   
    test('practice', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//select[@id='country']").selectOption({value: 'canada'})
    //await page.locator("//select[@id='country']").selectOption({index: 4})

    await page.waitForTimeout(2000);

})

    
    


 
})