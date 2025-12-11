import LoginPage from "../pages/LoginPage"


describe('Login Testleri', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it ('Başarılı Giriş', ()=>{

        LoginPage.typeUsername('standard_user')
        LoginPage.typePassword('secret_sauce')
        LoginPage.clickLogin()

        cy.url().should('include', '/inventory.html')
    })

    it ('Hatalı Giriş', ()=>{
        LoginPage.typeUsername('standard_user')
        LoginPage.typePassword('yanlis_sifre_123')
        LoginPage.clickLogin()

        LoginPage.errorMessage.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})