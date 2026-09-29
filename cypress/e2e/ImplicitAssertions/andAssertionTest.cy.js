describe(("AndAssertionTest"), () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/signup")
        cy.get(`a[href="/login"]`).click()
        cy.get(`.titleClass`).should('be.visible').and('contain', 'NexChat')
        cy.get(`input[placeholder="Type Here"]`).type('mickeymouse')
        cy.get(`input[placeholder="Password"]`).type('123456')
        cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
        cy.get('.authenticatedUser').should('be.visible').and('contain', 'Hello Mickey');
    })
})