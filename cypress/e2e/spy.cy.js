describe('Network Kontrolü', ()=>{

    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })


    it('XHR isteğini dinle', ()=>{
        cy.intercept('GET', '**/comments/*').as('getComment')

        cy.get('.network-btn').click()

        cy.wait('@getComment').then((interception)=>{
            expect(interception.response.statusCode).to.equal(200)

            cy.log('Gelen Cevap: ' + JSON.stringify(interception.response.body))
        })
    })
})