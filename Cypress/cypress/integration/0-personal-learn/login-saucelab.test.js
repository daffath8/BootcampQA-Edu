/// <reference types="cypress" />

describe('User success to login', () => {


    it('Should load correct url', () => {
        cy.visit('https://www.saucedemo.com/', {timeout: 10000});
        
    });

    it('Should try to login', () => {
        cy.fixture('user').then(user =>{
            const username= user.username
            const password= user.password

            cy.get('#user-name').click();
            cy.get('#user-name').type(username);

            cy.get('#password').click();
            cy.get('#password').type(password);

            cy.get('#login-button').click()



        })
    })
})