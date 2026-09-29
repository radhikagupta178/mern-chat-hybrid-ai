describe("login", () => {
    it("successful_login", () => {
        cy.visit("http://localhost:3000/login");
        cy.get(`a`).invoke('removeAttr', 'target').click();
        cy.get('h1').should('contain', 'Sign Up');
        cy.wait(5000);
        cy.go('back');
    })
})