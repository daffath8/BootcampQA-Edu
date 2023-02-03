// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (Username, Password) =>{
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').click();
    cy.get('#user_login').clear();
    cy.get('#user_login').type(Username);

    cy.get('#user_password').click();
    cy.get('#user_password').clear();
    cy.get('#user_password').type(Password);

    cy.get('#user_remember_me').check();
    cy.get('input[value="Sign in"]').click();
})

Cypress.Commands.add("paybills", (Payee, Account, Amount, Date, Desc) => {
        
    cy.get("#sp_payee").select(Payee)
    

    cy.get("#sp_account").select(Account)

    cy.get("#sp_amount").click()
    cy.get("#sp_amount").type(Amount)

    cy.get("#sp_date").click()
    cy.get("#sp_date").type(Date) 

    cy.get("#sp_description").click()
    cy.get("#sp_description").type(Desc)

    cy.get("#pay_saved_payees").click()

    cy.contains('The payment was successfully submitted.')
})