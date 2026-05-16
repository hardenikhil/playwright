const{ test, expect }= require('@playwright/test');

test('at_guestorder',async({page})=>{
  await page.goto('https://partylite.ninja/');
  await page.locator('#ltkpopup-close-button a').click();
  await page.getByRole('link', { name: 'Kerzen ' }).click();
  await page.goto('https://partylite.ninja/shop/d/kerzen/alle-kerzen');
  await page.locator('#product_C102093').getByText('+').click();
  await page.locator('#product_C102093').getByRole('button', { name: 'in den Warenkorb legen' }).click();
  await page.locator('#navbarNav #cart_dropdown').getByRole('button', { name: '2' }).click();
  await page.getByRole('link', { name: 'Warenkorb ansehen' }).click();
  await page.goto('https://partylite.ninja/shop/cart');
  await page.getByRole('link', { name: 'Kasse' }).click();
  await page.getByPlaceholder('E-Mail-Adresse').click();
  await page.getByPlaceholder('E-Mail-Adresse').fill('partylite_playwright@mailinator.com');
  await page.getByText('Weitermachen').click();
  await page.goto('https://partylite.ninja/shop/checkout');
  await page.getByRole('textbox', { name: 'Vorname*' }).click();
  await page.getByRole('textbox', { name: 'Vorname*' }).fill('test');
  await page.getByRole('textbox', { name: 'Nachname*' }).click();
  await page.getByRole('textbox', { name: 'Nachname*' }).fill('test');
  await page.getByRole('textbox', { name: 'Staße*' }).click();
  await page.getByRole('textbox', { name: 'Staße*' }).fill('43');
  await page.getByText('Dornach 43, 4360 GREIN').click();
  await page.getByRole('textbox', { name: 'Telefon (XXXXXXXXXXXXXXXXXXXX' }).click();
  await page.getByRole('textbox', { name: 'Telefon (XXXXXXXXXXXXXXXXXXXX' }).fill('0712-123456');
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByLabel('Ich stimme den Allgemeinen').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'BEZAHLUNG MIT KREDITKARTE' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Kartennummer *').click();
  await page1.getByLabel('Kartennummer *').fill('4111111111111111');
  await page1.getByLabel('Name des Karteninhabers *').click();
  await page1.getByLabel('Name des Karteninhabers *').fill('test');
  await page1.getByPlaceholder('MM').click();
  await page1.getByPlaceholder('MM').fill('03');
  await page1.getByPlaceholder('JJ').click();
  await page1.getByPlaceholder('JJ').fill('31');
  await page1.getByLabel('Sicherheitscode *').click();
  await page1.getByLabel('Sicherheitscode *').fill('123');
  await page1.locator('body').click();
  await page1.getByRole('button', { name: 'Zahlung vornehmen' }).click();
  await page.goto('https://partylite.ninja/shop/orders/R289817731?worldpay_payment_just_done=done');

})