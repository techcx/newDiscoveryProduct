describe("GLT client Login", function() {
    it("should log in", function() {
        cy.visit("/");
     
        ///Login

        cy.get("#userName")
        .type("upasna.b@msp-group.co.uk");
      
        cy.get("#password")
        .type("Msp@2018");
      
        cy.get('.button-primary')
       
        .click();

        /// Manage Projects page

        cy.get('#menu-main > :nth-child(3) > a')
        .click()

        ///Manage credit

        cy.get('.btn')
        .click();

        cy.wait (1000)

        ///Buy Credit

        cy.get(':nth-child(1) > .btn-select')
        .click();

        //cy.get('[type="checkbox"]').check() 

        cy.get('#submit')
        .click();

        cy.wait (6000)

        //cy.contains('Log in to PayPal')
    

    
    });

});