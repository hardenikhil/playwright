const {test, expect}= require('@playwright/test')

test('assertions', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    //Verify page URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //Verify page title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //verify element is visible or not
    const logo= await page.locator("//img[@alt='nopCommerce demo store']")
    await expect(logo).toBeVisible();

//Soft Assertions**
await page.goto('https://demo.nopcommerce.com/register');

await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
await expect.soft(page).toHaveTitle('STORE')

/*verify element is enable or disable
await expect(locator).toBeAttached()	Element is attached
await expect(locator).toBeChecked()	    Checkbox is checked
await expect(locator).toBeDisabled()	Element is disabled
await expect(locator).toBeEditable()	Element is editable
await expect(locator).toBeEmpty()	    Container is empty
await expect(locator).toBeEnabled()	    Element is enabled
await expect(locator).toBeFocused()	    Element is focused
await expect(locator).toBeHidden()	    Element is not visible
await expect(locator).toBeInViewport()	Element intersects viewport
await expect(locator).toBeVisible()	    Element is visible
await expect(locator).toContainText()	Element contains text
await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
await expect(locator).toHaveAttribute()	Element has a DOM attribute
await expect(locator).toHaveClass()	    Element has a class property
await expect(locator).toHaveCount()	    List has exact number of children
await expect(locator).toHaveCSS()	    Element has CSS property
await expect(locator).toHaveId()	    Element has an ID
await expect(locator).toHaveJSProperty()Element has a JavaScript property
await expect(locator).toHaveRole()	    Element has a specific ARIA role
await expect(locator).toHaveScreenshot()Element has a screenshot
await expect(locator).toHaveText()	    Element matches text
await expect(locator).toHaveValue()	    Input has a value
await expect(locator).toHaveValues()	Select has options selected
await expect(page).toHaveScreenshot()	Page has a screenshot
await expect(page).toHaveTitle()	    Page has a title
await expect(page).toHaveURL()	        Page has a URL
await expect(response).toBeOK()	        Response has an OK status
*/

})