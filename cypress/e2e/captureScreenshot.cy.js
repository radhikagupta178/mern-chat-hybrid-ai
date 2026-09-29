describe('captureScreenshot', () => {
    it('Capture ScreenShot', () =>{
        cy.visit("http://localhost:3000/login")
        cy.screenshot('homepage');
        cy.wait(2000);
        cy.get('h1').screenshot('Application Name');
    })
})