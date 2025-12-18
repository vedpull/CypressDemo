class CineversePage {

    get cookieAcceptButton() { return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')}


    handlePopups() {
        cy.get('body').then(($body)=>{
            if($body.find('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').length > 0){
                this.cookieAcceptButton.click()
            }
        })
    }

}



export default new CineversePage()