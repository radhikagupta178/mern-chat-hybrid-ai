describe('First Ever Test', () =>{
    it('First Test', () => {
    cy.visit('http://localhost:3000/login');
    cy.wait(5000);
    cy.get('.titleClass').should('contain', 'NexChat');
    });

    it('Second Test', () => {
        cy.visit('http://localhost:3000/login');
        cy.wait(5000);
        cy.get('.titleClass').should('contain', 'NextChat');
        })
})