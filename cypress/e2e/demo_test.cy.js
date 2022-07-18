///<reference types = "cypress"/>

describe('Amazon test',()=> {
    it('search a keyword on amazon', () =>{

    cy.visit('https://www.amazon.in/');
    cy.get('#twotabsearchtextbox').type('Books {enter}');
    cy.get('#twotabsearchtextbox', {timeout: 7000}).type('Books {enter}');
    cy.get('#nav-search-submit-button').click();
   
    cy.contains('Mobiles').click();
    });
})