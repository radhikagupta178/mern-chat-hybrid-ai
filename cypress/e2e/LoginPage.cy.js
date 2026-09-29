class Login {

    setUserName(data) {
        cy.get(`input[placeholder="Type Here"]`).type(data);
    }
    setPassword(data) {
        cy.get(`input[placeholder="Password"]`).type(data);
    }

    letsLogin() {
        cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
    }
    loginVerification() {
        cy.get(`.welcomeMessage`).should('have.text', 'Select a chat to start socializing!');
    }
}

export default Login