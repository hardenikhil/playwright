const { test, expect, request } = require('@playwright/test');

const BASE_URL = 'https://www.partylite.de'; // 👈 change this

test('Find broken links on website', async ({ page, request }) => {
  const visited = new Set();
  const brokenLinks = [];

  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // grab all <a href>
  const links = await page.$$eval('a[href]', anchors =>
    anchors.map(a => a.href)
  );

  for (const url of links) {
    // skip duplicates
    if (visited.has(url)) continue;
    visited.add(url);

    // skip non-http links
    if (
      url.startsWith('mailto:') ||
      url.startsWith('tel:') ||
      url.startsWith('javascript:') ||
      url.includes('#')
    ) continue;

    // optional: skip external domains
    if (!url.startsWith(BASE_URL)) continue;

    try {
      const response = await request.get(url, {
        timeout: 15000
      });

      const status = response.status();

      if (status >= 400) {
        brokenLinks.push({ url, status });
      }
    } catch (error) {
      brokenLinks.push({ url, status: 'REQUEST_FAILED' });
    }
  }

  console.log('\n❌ Broken Links Found:\n');
  brokenLinks.forEach(link =>
    console.log(`${link.status} → ${link.url}`)
  );

  console.log(`\nTotal Broken Links: ${brokenLinks.length}`);

  expect(brokenLinks.length).toBe(0); // ❗ optional – fail test if any broken
});