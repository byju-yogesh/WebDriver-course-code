import {expect as expectChai} from 'chai';
describe('UI controls Test Suite', async () => {
    it('UI controls', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise");
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")

        // await $("#signInBtn").click()
        const radioButtons = await $$(".radiotextsty")
        const userButton = radioButtons[1];
        await userButton.click()
        //click cancel
        //wait till pop up is
        await $("#cancelBtn").waitForDisplayed();
        // await browser.pause(3000)
        await $("#cancelBtn").click()

        //check is admin selected
        console.log(await radioButtons[0].isSelected())
        await userButton.click()
        await $("#cancelBtn").waitForDisplayed();
        await $("#okayBtn").click()
        // await browser.pause(2000)
        //now click on okay
        await radioButtons[0].click()
        //verify pop up is not displayed
        await expect("#cancelBtn").not.toBeDisplayed();


        //handle static dropdowns
        const dropdown = await $("select.form-control");
        await dropdown.selectByAttribute('value','stud');
        // await browser.pause(3000);
        await dropdown.selectByVisibleText("Consultant");
        // await browser.pause(3000);
        await dropdown.selectByIndex(1);
        await browser.pause(3000);

        expectChai(await dropdown.getValue()).to.equal("teach")
    })
    it('dynamic dropdown controls', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000);
        let items = await $$(".ui-menu-item div");
        for(var i = 0;i<await items.length;i++)
        {
            if(await items[i].getText() === "India")
            {
                await items[i].click()
                break;
            }
        }
        await browser.pause(2000)

        let checkboxes =await $$("[type='checkbox']");
        await checkboxes[1].click()
        console.log(await checkboxes[1].isSelected());
        await browser.saveScreenshot("ss.png");

    })
})


