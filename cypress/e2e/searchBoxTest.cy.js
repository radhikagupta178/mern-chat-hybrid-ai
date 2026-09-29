describe('SearchBoxTest', () =>{
    it('searchbox', () =>{
        cy.visit("http://localhost:3000/signup")
        cy.get(`a[href="/login"]`).click()
        cy.get(`.titleClass`).should('be.visible').and('contain', 'NexChat')
        cy.get(`input[placeholder="Type Here"]`).type('daisyduck')
        cy.get(`input[placeholder="Password"]`).type('123456')
        cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
        cy.wait(2000)
        cy.get('.authenticatedUser').should('be.visible').and('contain', 'Hello Daisy');
        cy.wait(5000);
        cy.get(`input[placeholder='Search']`).type('Harr').then(() =>{
            cy.wait(2000);
            cy.get(`button[class='btnClass']`).click()
        });
        cy.get('.userTitle').and('contain', 'Harry Potter')
        cy.wait(2000);
        cy.get(`input[placeholder='Send a message']`).and('exist');
    })
})