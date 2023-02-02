// const loginPage = require('../pageObjects/loginPage.js')
import LoginPage from '../pageobjects/loginPage.js';
import { expect as expectChai } from 'chai'
import shopPage from '../pageobjects/shopPage.js';
import cartReviewPage from '../pageobjects/cartReviewPage.js';
import confirmOrderPage from '../pageobjects/confirmOrderPage.js';


describe('Ecommerece Application', async () => {
    it('Login Failed Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(3000)
        await LoginPage.Login("rahulshettyacademy", "learning")
    })

    it('end to end validation', async () => {

        //open browser
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        //login
        await LoginPage.Login("rahulshettyacademy", "learning")

        //wait till page is loaded
        await shopPage.checkout.waitForExist();

        //add products in cart
        const products = ['iphone X', 'Blackberry']
        await shopPage.addproductToCart(products);
        await shopPage.checkout.click();

        //find total of products
        let prices = await cartReviewPage.removeExtraTexts();

        let total = prices.reduce((sum, cur) => {
            console.log(cur)
            sum = sum + (cur);
            return sum;
        }, 0);
        //get total displayed
        let totalDisplayed = await cartReviewPage.getTotalDisplayed();

        //validate sum and total displayed
        await expectChai(total).to.equal(totalDisplayed)

        //go to next page checkout
        await cartReviewPage.checkout.click();

        await confirmOrderPage.selectCountry("India", "ind")
        await confirmOrderPage.checkout.click();
        // await expect($(".alert-success")).toHaveTextContaining("Success");

    })

})