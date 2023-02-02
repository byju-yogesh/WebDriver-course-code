class ConfirmOrderPage{
    get searchBox()
    {
        return $(".form-control");
    }
    get checkout()
    {
        return $("a.btn-primary")
    }
    get dropDown()
    {
        return $(".lds-ellipsis");
    }
    get countryList()
    {
        return $$(".suggestions ul");
    }
    countryLink(country)
    {
        let link = "=" + country;
        console.log(link);
        return $(link);
    }
    async selectCountry(country,initails)
    {
        await this.searchBox.setValue(initails);
        await this.dropDown.waitForExist();
        let c = await this.countryLink(country)
        console.log(c);
        if(c == undefined)
        {
            console.log("Error")
        }
        else{
            await c.click()
        }
    }
}
export default new ConfirmOrderPage();