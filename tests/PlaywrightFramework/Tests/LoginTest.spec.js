
const {test, expect}= require("@playwright/test")

const {LoginPage}= require("../PageObject/LoginPageObject")

const TestData= reqruire("../TestData.json")

const screenshots= require("../Utils/screenshotutil")

test.describe('login modue', async()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/web/index.php/auth/login')
    });

    test('verify login flow', async({page})=>{

        const LoginPageObject= new LoginPage(page);
        await LoginPageObject.login(TestData.user, TestData.pass);
    })
    await expect(homePage.dashboard).toBeVisible();
})
    test.afterEach(async ({ page }, testInfo) => {
         if(testInfo.status !== testInfo.expectedStatus){
            await ScreenshotUtil.capture(

                page,

                `Failed-${Date.now()}`
            );
         }
    })
