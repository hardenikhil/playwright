
/*To record script automatically using chrome browser

npx playwright codegen -o tests/partylite/at_guestorder --browser cr

//To run script on chromium
npx playwright test ./partylite/at_guestorder.spec.js --project chromium --headed

//To reduce screen size
//npx playwright codegen --viewport-size "1100,1100"

npx playwright test homepage.spec.js        >> To run test in headless mode
npx playwright test homepage.spec.js --headed >> To run test with browser
npx playwright test homepage.spec.js --project=chromium --headed >> To run test in particular browser
npx playwright test homepage.spec.js --project=chromium --headed --debug
*/