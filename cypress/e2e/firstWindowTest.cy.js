describe('First Window', () =>{
    it('First Test', () =>{
        cy.visit('http://localhost:3000/login');
        cy.get('h1').should('contain', 'NexChat');
    })

    it('Fail Test', () =>{
        cy.visit('http://localhost:3000/login');
        cy.get('h1').should('contain', 'NextChat');
    })
})