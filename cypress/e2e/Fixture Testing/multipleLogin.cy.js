import Login from '../LoginPage.cy.js';

describe("MutlipleLogin", () => {
    let users_names = [];
    before(() => {
        cy.visit("http://localhost:3000/login")
        cy.fixture("example").then((data) => {
            users_names.push(data);

        })
    })
    it(("onlineTest"), () => {
        //     // cy.visit("http://localhost:3000/login")
        const ln = new Login(users_names);
        ln.setUserName(users_names[0].username);
        ln.setPassword(users_names[0].password);
        ln.letsLogin();
        ln.loginVerification();
    })

    after(() => {
        cy.log("User login was successful")
    })
})