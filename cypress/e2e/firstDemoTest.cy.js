describe('First Demo Test', () =>{
    it('First Test', () =>{
        cy.visit('http://localhost:3000/login');
        cy.get('.titleClass').should('contain', 'NexChat');
    });

    it('Second Test', () =>{
        cy.visit('http://localhost:3000/login');
        cy.get('.titleClass').should('contain', 'NextChat');
    })
})