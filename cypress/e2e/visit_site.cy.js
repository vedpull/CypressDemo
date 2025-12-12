describe('Site ziyareti', ()=>{

it('Site ziyareti', ()=>{
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

    cy.title().should('include', 'The Internet');

    cy.get('.example').find('button').click()


    cy.get('#finish', {timeout:10000}).invoke('text').then((text)=>{
        const cleanedText = text.trim()

        expect(cleanedText).to.equal('Hello World!')
        cy.log('Test başarılı, metin doğru')
    })

    
})
})