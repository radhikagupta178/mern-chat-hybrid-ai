describe('Login Test Case', () =>{
    it('Login Test', () =>{
        cy.visit('http://localhost:3000/login')
        cy.get(`input[placeholder='Type Here']`).type('daisyduck');
        cy.get(`input[placeholder='Password']`).type('123456');
        cy.get(`button`).click();
        cy.wait(5000);
        
        cy.get(`button[class='.btn btn-block btn-sm mt-2']`).should('not.exist');
    })
})