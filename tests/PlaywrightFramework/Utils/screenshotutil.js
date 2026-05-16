class screenshotutil{

    static async capture(page, filename)
    {
        await page.screenshot({path:'screenshots/${fileName}.png', fullpage: true})

    }
}
module.exports = ScreenshotUtil;