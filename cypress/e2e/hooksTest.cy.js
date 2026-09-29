describe("hookText", () => {
    let users_names = [];
    before(() => {
        cy.visit("http://localhost:3000/login")
        cy.fixture("example").then((data) => {
            cy.get(`input[placeholder="Type Here"]`).type(data.username);
            cy.get(`input[placeholder="Password"]`).type(data.password);
            cy.get(`button[class="btn btn-block btn-sm mt-2"]`).click()
            cy.get(`div[class="conversationStarter"] div div p`).contains(`Hello ${data.firstName}`)
        })
        cy.fixture("userList").then((data) => {
            users_names.push(data);
        })
    })
    beforeEach(() => {
        cy.get(`div[class="conversationStarter"]`).should('be.visible');
    })

    it.skip(("chatTest"), () => {
        cy.log(users_names[0].user_2)
        var firstUser = users_names[0].user_2;
        cy.get(`div[id="${firstUser}"]`).click();
        cy.log(firstUser);
        cy.get(".userTitle").contains(`To: ${firstUser}`);
        cy.get(`input[placeholder="Send a message"]`).type(`Hi ${firstUser.split(" ")[0]}`);
        cy.get(`button[id="sendButton"]`).click();
    })

    it.only(("chatTest_1"), () => {
        cy.log(users_names[0].user_4)
        var firstUser = users_names[0].user_4;
        cy.get(`div[id="${firstUser}"]`).click();
        cy.log(firstUser);
        cy.get(".userTitle").contains(`To: ${firstUser}`);
        cy.get(`input[placeholder="Send a message"]`).type(`Hi ${firstUser.split(" ")[0]}`);
        cy.get(`button[id="sendButton"]`).click();
    })

    afterEach(() => {
        cy.log("Message sent successfully")
        cy.get(`div[id="${users_names[0].user_2}"]`).click();
        cy.get(`div[class="sentMsg"]`).contains(`Hi ${users_names[0].user_2.split(" ")[0]}`);
        cy.get(`div[id="${users_names[0].user_4}"]`).click();
    })
    
    after(() =>{
        cy.wait(5000);
        cy.log("Thank you!");
    })
})