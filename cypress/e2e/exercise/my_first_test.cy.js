describe ('SauceDemo Testleri', ()=> {
    it('siteye erişim kontrolü', ()=>{
        cy.visit('https://www.saucedemo.com/')

        cy.title().should('include', 'Swag Labs')
    })
})
