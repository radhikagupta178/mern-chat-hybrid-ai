describe('CSSLocator', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(`input[placeholder="Type Here"]`).type('daisyduck')
        cy.get(`input[placeholder="Password"]`).type('123456')
        cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
        cy.get('.authenticatedUser').should('be.visible').and('contain', 'Hello Daisy');
    })
})