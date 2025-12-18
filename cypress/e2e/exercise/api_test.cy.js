describe('Api Testing', ()=>{

    it('Api Test İsteği', ()=>{

      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
            title: "Vedat",
            body:"QA Tester"
        }
      }).then((response)=>{
        expect(response.status).to.equal(201)

        expect(response.duration).to.be.lessThan(100)

        expect(response.body.title).to.equal("Vedat")

        expect(response.body).to.have.property('id')
      })
    })


    it('Kullanıcı listesini çekmeli', ()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response)=>{
            expect(response.status).to.equal(200)

            expect(response.body).to.not.be.empty

            expect(response.body).to.be.an('array')    
            
            expect(response.body).to.have.length.at.least(1)

            expect(response.body[0]).to.have.property('name')

            cy.log('ilk kullanıcı' + response.body[0].name)

        })
    })
})