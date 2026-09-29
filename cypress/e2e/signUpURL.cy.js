describe('CSSLocator', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(`a[href="/signup"]`).click()
        cy.get(`h1[class="text-3xl font-semibold text-center text-gray-300"]`)
    })
})