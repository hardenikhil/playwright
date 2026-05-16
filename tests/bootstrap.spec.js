const {test, expect} =require('@playwright/test');

test('multiselect dropdown', async ({ page }) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_1');

    await page.locator('.multiselect-selected-text').click();

    const options = await page.$$('.multiselect-container.dropdown-menu li');

    for (const option of options)
    {
        const value = await option.textContent();

        if (value.includes('HTML') || value.includes('Angular JS'))
        {
            await option.click();
        }
    }

});