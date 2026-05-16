
class loginPage{

    constructor (page){

        this.page= page;
        this.username= page.locator("//input[@name='username']")
        this.password= page.locator("//input[@name='password']")
        this.loginbtn= page.locator("//button[@type='submit']")
    }

    async login(user, pass)
    {
        this.username.fill(user);
        this.password.fill(pass);
        this.loginbtn.click();
    }
}

module.exports= {loginPage}