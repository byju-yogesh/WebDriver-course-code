describe('Watch Video on youtube',async()=>{
    xit('watch',async()=>{
        await browser.url("https://www.youtube.com")
        await $("//input[@id='search']").setValue("row equlivalent");
        
        await browser.pause(3000);
    })
})