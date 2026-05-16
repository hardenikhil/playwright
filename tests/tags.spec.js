
// --grep @sanity / --grep @regression
const {test, expect}= require('@playwright/test')

test('tags@smoke', async({page})=>{
console.log("this is test 1")

})

test('tags@regression', async({page})=>{
console.log("this is test 2")

})

test('tags@smoke@regression', async({page})=>{
console.log("this is test 1")

})