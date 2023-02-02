describe('Amazecarts', async () => {
    it('Amazecarts', async () => {
        await browser.url("https://amazecarts.up.railway.app/");
        console.log(await browser.getTitle());

        await expect(browser).toHaveTitleContaining("Home")
        let val = await $("//a[normalize-space()='SignIn']").getAttribute('href')
        console.log(val)
        let newVal = val.slice(1);
        let url = await browser.getUrl();
        let newUrl = url + newVal;
        console.log(newUrl);
        await browser.newWindow(newUrl)
        console.log(await browser.getTitle())
        await $("//a[normalize-space()='SignIn']").click();
        await $("//input[@id='email']").waitForExist()
        await $("//input[@id='email']").setValue("yogesh123@gmail.com")
        await $("//input[@id='password']").setValue("12345678")
        await $("//input[@value='Sign In'] ").click()
        // await browser.pause(4000)
        
        // //grab incorrect username password alert
        // await browser.waitUntil(
        //     async () => (await $("#signInBtn").getAttribute('value')) === 'Sign In',
        //     {
        //         timeout: 5000,
        //         timeoutMsg: "Error Displayed"
        //     })
        // console.log(await $(".alert").getText())

        // await expect($("p.text-center")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

    })

    xit('Login Success Page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        //wait untill another page is loaded
        await $("a.btn-primary").waitForExist()
        await expect(browser).toHaveTitleContaining("ProtoCommerce")
        await expect(browser).toHaveUrlContaining("shop")
    })
})