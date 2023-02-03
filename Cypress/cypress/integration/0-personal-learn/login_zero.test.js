/// <reference types="cypress" />
describe('user failed to success with unregistered data', () => {
        it('Should load correct url', () => {
            cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000});
            cy.url().should('include', 'login.html');
        });
    
        it('Should login', () =>{
            cy.fixture("user").then(user => {
                const Username = user.Username
                const Password = user.Password

                cy.login(Username, Password)
            })
        });
        //it('Should fill the username',() => {
            //cy.get('#user_login').click();
            //cy.get('#user_login').clear();
           // cy.get('#user_login').type('username');
           // cy.get('#user_login').should('have.value', 'username');
        //});

        //it('Should fill the password', () => {
            //cy.get('#user_password').click();
            //cy.get('#user_password').clear();
            //cy.get('#user_password').type("password");
           // cy.get('#user_password').should('have.value', 'password');
        //});

        //it('Should thick checkbox', () =>{
           // cy.get('#user_remember_me').check();
        //});

        
  
    
});