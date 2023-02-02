class ShopPage{
    get checkout()
    {
        return $("a.btn-primary")
    }
    get cards()
    {
        return $$(".card");
    }

    async addproductToCart(products)
    {
        for(let i = 0;i<await this.cards.length;i++)
        {
            const card = await this.cards[i].$(".card-title a")
            const text = await card.getText()
            if(products.includes(text)){
                await this.cards[i].$(".card-footer button").click()
            }
        }
    }
}
export default new ShopPage();