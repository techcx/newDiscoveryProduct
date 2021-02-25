describe('GoLiveTest', () => {
    it('Sign up fixtures', () => {
     
     before(func)
     
     
     
      cy.visit('http://202.131.107.107/sd/glt/user/signup')



      

    })
  //username
  cy.get('#userName').type ('rushik.p@msp-group.co.uk')
     

  //Password
  cy.get('#password').type ('Msp@2019')
 
  //login button

  cy.get('.button-primary').click()




/*

      /////username
      cy.get('#email').type ('test.test1.co.uk')
     

      //Password
      cy.get('#password').type ('Tester12')
     
      /////confirm password

      cy.get('#repeatpassword').type ('Tester12')

      /////First Name
   
      cy.get('#firstName').type ('Charles')

      /////Last Name

      
      cy.get('#lastName').type ('CRoinney')

      /////Company Name

      
      cy.get('#companyName').type ('Test Ltd')

       /////Chexkbox T&C's

      
       cy.get('#terms_conditions').check()


      /////Contact number

      
      cy.get('#phone').type ('0208 5641234')
      

*/




    })

})