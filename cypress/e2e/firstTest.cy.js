describe('CSSLocator', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get(".titleClass").contains('NexChat')
  });
  
  it('fails', () =>{
    cy.visit('http://localhost:3000/login');
    cy.get('.titleClass').contains('NextChat');
  })
})