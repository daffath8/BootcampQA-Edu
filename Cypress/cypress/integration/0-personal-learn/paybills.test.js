/// <reference types="cypress" />

describe('Make payments to your saved payees', () => { 

    it('Should load correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000});
        cy.url().should('include', 'login.html');
    })

    it('Should login', () =>{
        cy.fixture("user").then(user => {
            const Username = user.Username
            const Password = user.Password

            cy.login(Username, Password)
        })
        cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
        
    });
    
    
        //cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html', {timeout: 10000})
    

    it('Should add payments', () => {
       cy.fixture('paybills_saved').then(paybills_saved => {
            const Payee = paybills_saved.Payee
            const Account = paybills_saved.Account
            const Amount = paybills_saved.Amount
            const Date = paybills_saved.Date
            const Desc = paybills_saved.Desc
           
            cy.paybills(Payee, Account, Amount, Date, Desc)
            
            
       })

    })
    it('Should contains Successfull message', () =>{
        cy.contains('The payment was successfully submitted.')
    })
 })