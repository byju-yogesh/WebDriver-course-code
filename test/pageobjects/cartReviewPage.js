class cartReviewPage{
    get checkout()
    {
        return $('.btn-success')
    }
    get prices()
    {
        return $$("//tbody/tr/td[4]/strong");
    }
    async removeExtraTexts(prices){
        prices =await Promise.all(await this.prices.map(async (price)=>{
            let text =await  price.getText();
            let texts = text.split('.');
            let val = texts[1].trim();
            let x =  parseInt(val);
            return x;
        }))
        return prices
    }
    async getTotalDisplayed()
    {
        return parseInt((await $("h3 strong").getText()).split('.')[1].trim());
    }
}
export default new cartReviewPage();