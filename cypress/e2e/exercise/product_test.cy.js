describe('Product Testleri', ()=>{

    let UserData;


    before(()=>{
        cy.fixture('users').then((data)=>{
            UserData = data;
        })
    })

    beforeEach(()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.login(UserData.validUser.username, UserData.validUser.password)
    })

    it('Login Sonrası Ürünler Listelenmeli', ()=>{
        cy.url().should('include', '/inventory.html')
        cy.get('.inventory_item').should('have.length.greaterThan', 1)
    })

})