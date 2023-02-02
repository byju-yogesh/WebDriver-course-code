describe('Amazecarts', async () => {
    it('Amazecarts', async () => {
        await browser.url("https://amazecarts.up.railway.app/");
        let homeTitle = await browser.getTitle()
        console.log(homeTitle);


        //verify homepage title
        await expect(browser).toHaveTitleContaining("Home")

        //go to the new window
        let val = await $("//a[normalize-space()='SignUp']").getAttribute('href')
        console.log(val)
        let newVal = val.slice(1);
        let url = await browser.getUrl();
        let newUrl = url + newVal;
        console.log(newUrl);
        await browser.newWindow(newUrl)
        console.log(await browser.getTitle())

        //confirm new window title is not matching with homepage title
        await expect(browser).not.toHaveTitle(homeTitle)

        //click on any link
        await $("//a[normalize-space()='SignIn']").click();
        await $("//input[@id='email']").waitForExist()

        //login details
        await $("//input[@id='email']").setValue("yogesh123@gmail.com")
        await $("//input[@id='password']").setValue("12345678")
        await $("//input[@value='Sign In'] ").click()

        //verify cart is empty

        //logout
        await $("//a[@class = 'nav-link'][normalize-space()='Log Out']").click()
        let handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
        await browser.pause(3000)
    })
})