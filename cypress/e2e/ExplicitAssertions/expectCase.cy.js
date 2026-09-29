describe("ExpectCase", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/login")
        cy.get(`input[placeholder="Type Here"]`).type("daisyduck")
        cy.get(`input[placeholder="Password"]`).type("123456")
        cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
        let correctText = "Daisy";
        cy.get(`div[class="conversationStarter"] div div p`).then((x) => {
            let actualText = x.text();
            expect(actualText).to.contain(correctText)
        });
    });
})