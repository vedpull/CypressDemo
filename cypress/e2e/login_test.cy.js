describe ('Login Testlri', ()=>{
    it('Kullanıcı Girişi', ()=>{

        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url().should('include', '/inventory.html')
    })

    it ('Hatalı Giriş', ()=>{
        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('yanlis_sifre_123')
        cy.get('#login-button').click()

        cy.get('[data-test = "error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})