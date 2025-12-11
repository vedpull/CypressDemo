import LoginPage from "../pages/LoginPage"


describe('Login Testleri', ()=>{

    let userData;

    before(()=>{
        cy.fixture('users').then((data)=>{
            userData = data;
        })
    })

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it ('Başarılı Giriş', ()=>{

        LoginPage.typeUsername(userData.validUser.username)
        LoginPage.typePassword(userData.validUser.password)
        LoginPage.clickLogin()

        cy.url().should('include', '/inventory.html')
    })

    it ('Hatalı Giriş', ()=>{
        LoginPage.typeUsername(userData.invalidUser.username)
        LoginPage.typePassword(userData.invalidUser.password)
        LoginPage.clickLogin()

        LoginPage.errorMessage.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it ('Kilitli Kullanıcı Girişi', ()=>{
        LoginPage.typeUsername(userData.lockedUser.username)
        LoginPage.typePassword(userData.lockedUser.password)
        LoginPage.clickLogin()

        LoginPage.errorMessage.should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
    
})