/// <reference types="cypress" />
describe('browser actions', () => {
    it('Should load correct url', () =>{
        cy.visit('https://example.com/', {timeout:10000});
    });

    it('Should check correct url', () =>{
        cy.url('include', 'example.com');
    });
    
    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible');
    });

    
});