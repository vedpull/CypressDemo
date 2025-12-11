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

     cy.login(userData.validUser.username, userData.validUser.password)

        cy.url().should('include', '/inventory.html')
    })

    it ('Hatalı Giriş', ()=>{
        cy.login(userData.invalidUser.username, userData.invalidUser.password)

        LoginPage.errorMessage.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it ('Kilitli Kullanıcı Girişi', ()=>{
        cy.login(userData.lockedUser.username, userData.lockedUser.password)
        LoginPage.errorMessage.should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

})