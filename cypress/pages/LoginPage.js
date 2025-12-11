class LoginPage {

    get usernameInput() {
        return cy.get('#user-name')
    }
    
    get passwordInput() {
        return cy.get('#password')
    }

    get loginButton () {
        return cy.get('#login-button')
    }

    get errorMessage () {
        return cy.get('[data-test = "error"]')
    }

    
    typeUsername(username){
        this.usernameInput.type(username)
    }

    typePassword(password){
        this.passwordInput.type(password)
    }

    clickLogin(){
        this.loginButton.click()
    }
}


export default new LoginPage()