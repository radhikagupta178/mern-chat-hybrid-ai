describe("CheckboxTest", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/signup")
        cy.get(`#male`).should('be.visible')
        cy.get(`#female`).should('be.visible')
        cy.wait(5000);
        cy.get(`#female`).check().should('be.checked')
        cy.get(`#male`).should('not.be.checked')
    })
})