
const {test, expect}= require('@playwright/test')
//test.describe.skip('group1', ()
test.describe('group1', ()=>{

    test('test1', async({page})=>{

    console.log('this is test 1...')
})

    test('test2', async({page})=>{
    console.log('this is test 2...')
})

})

test.describe.only('group2', ()=>{

    test('test3', async({page})=>{
     console.log('this is test 3...')
    })
})