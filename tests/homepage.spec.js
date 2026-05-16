/*
npx playwright test homepage.spec.js          >> To run test in headless mode
npx playwright test homepage.spec.js --headed >> To run test with browser
npx playwright test homepage.spec.js --project=chromium --headed >> To run test in particular browser
npx playwright test homepage.spec.js --project=chromium --headed --debug
*/ 

const{ test, expect }= require('@playwright/test');

test('homepage',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    const Pagetitle= page.title;
    console.log('Page title is '+ Pagetitle);

    await expect(page).toHaveTitle('STORE');

    const Pageurl=page.url;
    console.log('page url is '+ Pageurl);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close;

})