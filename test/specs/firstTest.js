describe('My Login application', async () => {
    xit('loginPageFailed', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        console.log(await browser.getTitle());

        await expect(browser).toHaveTitleContaining("Rahul")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning2")
        await $("#signInBtn").click()
        // await browser.pause(4000)
        //grab incorrect username password alert
        await browser.waitUntil(
            async () => (await $("#signInBtn").getAttribute('value')) === 'Sign In',
            {
                timeout: 5000,
                timeoutMsg: "Error Displayed"
            })
        console.log(await $(".alert").getText())

        await expect($("p.text-center")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

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


