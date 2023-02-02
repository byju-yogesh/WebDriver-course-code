import { expect as expectChai } from 'chai'
describe('Functional Sceniores Test Suite', async () => {

    it('Functional Scenerios', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        // await $("#mousehover").scrollIntoView()
        // await browser.pause(3000)
        // await $("#mousehover").moveTo()
        // await browser.pause(3000)
        // await $("=Top").click()
        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        expectChai(await browser.isAlertOpen()).to.be.true
        expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()
        await browser.pause(3000)

    })
    xit('web table validations', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await $("tr th:nth-child(1)").click()
        const veggieLocators = await $$("tr td:nth-child(1)");
        let veggieNames = await veggieLocators.map(async veggie => await veggie.getText())
        let sortedVeggies = await veggieNames.sort()
        await expectChai(veggieNames).to.equal(sortedVeggies)

    })
})