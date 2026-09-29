describe("login", () => {
    it("successful_login", () => {
        cy.visit("http://localhost:3000/login")
        cy.fixture("loginSamples").then((data) => {

            data.forEach(e => {


                cy.get(`input[placeholder="Type Here"]`).type(e.username);
                cy.get(`input[placeholder="Password"]`).type(e.password);
                //directly
                // cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
                //through custom commands
                cy.clickLogin('btn btn-block btn-sm mt-2');
                // if(cy.get(`div[class="conversationStarter"] div div p`) && cy.get(`div[class="conversationStarter"] div div p`).contains(`Hello ${e.firstName}`)){
                if (e.password === '123456') {
                    cy.log('Login Successful!')
                    cy.get(`svg[class='w-6 h-6 text-white cursor-pointer']`).click()
                }
                else cy.log("Unsuccessful login attempt!")
            })
        })
    })
})