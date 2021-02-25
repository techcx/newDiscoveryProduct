describe('GoLiveTest', () => {
    it('Logins', () => {
      cy.visit('http://uat.golivetest.com/glt/user/login')

      //username
      cy.get('#userName').type ('rushik.p@msp-group.co.uk')
     

      //Password
      cy.get('#password').type ('Msp@2019')
     
      //login button

      cy.get('.button-primary').click()
      


    


    })
  })