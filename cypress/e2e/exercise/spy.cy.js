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

    it('Sunucuya kandırıp, kendi mesajını yazdırma', ()=>{

        cy.intercept('GET', '**/comments/*', {
            statusCode:200,
            body:{
                name:"vedat", 
                email:'deneme@gmail.com',
                body:'bu site manipüle edildi'
            }
        }).as('mockedComment')

        cy.get('.network-btn').click()

        cy.get('.network-comment').should('contain', 'bu site manipüle edildi')
    })
})