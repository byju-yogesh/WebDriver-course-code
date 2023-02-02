import {expect as expectChai} from 'chai'
describe('End to End Ecommerce',async()=>{
    it('end to end validation', async()=>{
        const products = ['iphone X','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        // await browser.pause(5000)
        await $("a.btn-primary").waitForExist()

        //select the all cards
        let cards =await $$(".card")
        //in cards we are having card
        // console.log(cards)
        for(let i = 0;i<await cards.length;i++)
        {
            // get cardrd[] text
            const card = await cards[i].$(".card-title a")
            const text = await card.getText()
            if(products.includes(text)){
                await cards[i].$(".card-footer button").click()
            }
        }
        await $("a.btn-primary").click();
        await $('.btn-success').waitForExist();

        //check sum is correct or not
        let prices =await $$("//tbody/tr/td[4]/strong")
        // let total =(await Promise.all(await prices.map(async(price)=>
        //     parseInt((await price.getText()).split('.')[1].trim())
        // ))).reduce((sum,cur)=>
        //     sum =sum+cur,0);
        prices =await Promise.all(await prices.map(async (price)=>{
            let text =await  price.getText();
            let texts = text.split('.');
            let val = texts[1].trim();
            let x =  parseInt(val);
            return x;
        }))
        let total = prices.reduce((sum,cur)=>{
            console.log(cur)
            sum = sum + (cur);
            return sum;
        },0);
        console.log(total);
        // browser.pause(3000)
        let totalDisplayed = parseInt((await $("h3 strong").getText()).split('.')[1].trim());
        //text is dsiplayed in another format
        console.log(totalDisplayed);

        await expectChai(total).to.equal(totalDisplayed)
        await $('.btn-success').click();
        await $('.btn-success').waitForExist();
        // await browser.pause(3000)
        await $(".form-control").setValue("In")
        await $(".lds-ellipsis").waitForExist({reverse : true})
        let countries =await $$(".suggestions ul");
        await $("=India").click();
        await $('.btn-success').click();
        // for(let i = 0;i<countries.length;i++)
        // {
        //     let country =await countries[i].$("li a").getText();
        //     if(country === "India")
        //     {
        //         await countries[i].click();
        //         await browser.pause(10000)
        //     }
        // }
        // $(".alert-success").getT
        // await browser.pause(10000)
        await expect($(".alert-success")).toHaveTextContaining("Success");

    })  
})