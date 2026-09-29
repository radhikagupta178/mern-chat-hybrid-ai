describe("URLTest", () => {
    it("test_URL", () => {
        cy.visit("http://localhost:3000/login")
        cy.get(`a[href="/signup"]`).then((e) => {
            let url = e.prop("href");
            cy.visit(url);
        })
        cy.url().should('include', "http://localhost:3000/signup")
        cy.wait(5000);
        cy.go('back');
    })

    it("URLtest", () => {
        cy.visit("http://localhost:3000/login")
        cy.get(`a[href="/signup"]`).invoke('removeAttr', 'target').click();
        cy.get(`div[class="w-full -6 rounded-lg shadow-md bg-gray-400 bg-clip padding backdrop-filter backdrop-blur-lg bg-opacity-0"]`).should('be.visible');
        cy.go('back')
    })
})