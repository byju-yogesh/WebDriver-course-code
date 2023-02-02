describe('Windows and Frames Miscellanous', async () => {
   xit('Parent and Child windows switch', async () => {
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      // await browser.pause(3000);
      await $(".blinkingText").click()
      // console.log(await $("h1").getText()) : will not work , new page
      const handles = await browser.getWindowHandles()
      await browser.switchToWindow(handles[1])
      await browser.pause(3000);

      console.log(await browser.getTitle())//Rahul Shetty Academy
      await browser.closeWindow()
      await browser.switchToWindow(handles[0])
      console.log(await browser.getTitle())//LoginPage Practise | Rahul Shetty Academy
      // //*********************************** */
      await browser.newWindow("https://google.com")//automation
      console.log(await browser.getTitle())// Google
      await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
   })

   xit('Frames switch', async () => {
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      await $("#mousehover").scrollIntoView()
      console.log(await $$("a").length)
      await browser.switchToFrame(await $("[id='courses-iframe']"))
      console.log(await $("=Courses").getTagName())
      console.log(await $$("a").length)
      await browser.switchToFrame(null)
      console.log(await $$("a").length)

   })


})