describe('hoverTest', () =>{
    it('hoverTest', () =>{
        cy.visit("http://localhost:3000/login")
        cy.get(`.titleClass`).should('be.visible').and('contain', 'NexChat')
        cy.get(`a[href='/signup']`).trigger('Mouseover').click()
        cy.get(`input[placeholder='Enter name']`).should('exist')
    })
})