
const {test, expect}= require("@playwright/test")

test.beforeEach(async ({page})=>{
    console.log("Before each test");
})

test.afterEach(async ({page})=>{
    console.log("After each test");
})