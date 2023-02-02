class LoginPage{
    get userName(){
        return $("#username")
    }
    get passsword()
    {
        return $("#password")
    }
    get signIn(){
        return $("//input[@name = 'signin']")
    }
    async Login(userName,password){
        await this.userName.setValue(userName);
        await this.passsword.setValue(password);
        await this.signIn.click();
    }
}
export default new LoginPage();