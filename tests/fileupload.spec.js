const{test, expect}=require('@playwright/test')

test('fileupload', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector("//input[@id='filesToUpload']");

    //await page.locator("//input[@id='filesToUpload']").click();

    await page.locator("//input[@id='filesToUpload']").setInputFiles('tests/files/Leave_and_License_Agreement.pdf');

    await page.waitForTimeout(5000)

    expect (await page.locator("//li[normalize-space()='Leave_and_License_Agreement.pdf']")).toHaveText('Leave_and_License_Agreement.pdf')

    //upload multiple files
    //await page.locator("//input[@id='filesToUpload']")
    // .setInputFiles(['tests/files/Leave_and_License_Agreement.pdf','tests/files/testfile.pdf']);


})