//Without fixtures:
test('login test', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://myapp.com/login');
  await page.fill('#email', 'user@test.com');
  await page.fill('#password', 'pass123');
  await page.click('button[type=submit]');
  // ... actual test
  await browser.close(); // easy to forget!
});

//With fixtures:
test('login test', async ({ loggedInPage }) => {
  // already logged in, browser opens and closes automatically
});


import { test as base, expect } from '@playwright/test';


const MyFixtures = {
  loggedInPage: Page,
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    // SETUP — runs before each test
    await page.goto('https://myapp.com/login');
    await page.fill('#email', 'user@test.com');
    await page.fill('#password', 'pass123');
    await page.click('button[type=submit]');
    await page.waitForURL('/dashboard');

    // HAND OFF to the test
    await use(page);

    // TEARDOWN — runs after each test
    await page.goto('/logout');
  },
});

import { test, expect } from './fixtures';

test('can see dashboard', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText('Welcome')).toBeVisible();
});