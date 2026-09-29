describe('CheckActiveUsers', () =>{
    
    before(() => {
        cy.visit("http://localhost:3000/login")
        cy.fixture("example").then((data) => {
            cy.get(`input[placeholder="Type Here"]`).type('daisyduck');
            cy.get(`input[placeholder="Password"]`).type('123456');
            cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
            
        })
    })
    
    it('checkactive', () =>{
        cy.get(`div[class="conversationStarter"] div div p`).contains(`Hello Daisy`)
        cy.get('.circle').should('have.length', 1);

    })
})