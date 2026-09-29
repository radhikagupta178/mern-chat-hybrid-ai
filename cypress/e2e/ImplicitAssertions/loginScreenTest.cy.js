describe("ImplicitAssertion", () => {
    it('passes', () => {
        cy.visit("http://localhost:3000/signup")
        cy.wait(5000);
        // cy.get(`a[href="/login"]`).click()
        cy.get(`h1[class='text-3xl font-semibold text-center text-gray-300']`).should('be.visible').should('contain', 'Sign Up');
    })
})