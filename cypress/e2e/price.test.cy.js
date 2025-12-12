

describe('Fiyat Hesaplamalar', ()=>{



    let userData; 

    before(()=>{
        cy.fixture('users').then((data)=>{
            userData = data;
        })
    })

    beforeEach(()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.login(userData.validUser.username, userData.validUser.password)

    })

    it('Doğru ürünleri listeleme', ()=>{

        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item').eq(0).find('.inventory_item_price').invoke('text').as('price1')
        cy.get('.inventory_item').eq(1).find('.inventory_item_price').invoke('text').as('price2')

        cy.then(function(){

            const price1 = parseFloat(this.price1.replace('$', ''))
            const price2 = parseFloat(this.price2.replace('$', ''))

            if(price1<price2){
                cy.log('sıralama doğru')
            }else{
                cy.log('sıralama yanlış')
            }
        })
    })

    it('Doğru ürünleri bulup sepete ekleyip, fiyatlarını hesaplama', ()=>{

        cy.get('.inventory_item').filter(':contains("Sauce Labs Backpack")').find('.inventory_item_price').invoke('text').as('fiyat1')
     
        cy.get('.inventory_item').filter(':contains("Sauce Labs Bike Light")').find('.inventory_item_price').invoke('text').as('fiyat2')
        cy.get('.inventory_item').filter(':contains("Sauce Labs Backpack")').find('button').click();
        cy.get('.inventory_item').filter(':contains("Sauce Labs Bike Light")').find('button').click();

        cy.then(function(){
            const fiyat1 = parseFloat(this.fiyat1.replace('$', ''))
            const fiyat2 = parseFloat(this.fiyat2.replace('$', ''))

            const beklenenToplam = fiyat1 + fiyat2;

            cy.log("hesaplanan toplam:" + beklenenToplam)
            cy.get('.shopping_cart_link').click();
            cy.get('#checkout').click()
    
            cy.get('#first-name').type("test")
            cy.get('#last-name').type("surnametest")
            cy.get('#postal-code').type("344343")
    
            cy.get('#continue').click();
    
            cy.get('.summary_subtotal_label').invoke('text').then((ekrandakiYazi)=>{
                let ekrandakFiyat = parseFloat(ekrandakiYazi.replace('Item total: $', ''))
    
    
                expect(beklenenToplam).to.equal(ekrandakFiyat)
            })
        })




    })



})