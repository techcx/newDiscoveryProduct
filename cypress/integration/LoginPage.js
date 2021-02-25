import LogonPage from '../../support/PageObjects/LogonPage'


describe('GoLiveTest', function () {

    it('Validate Logins Process', function () {

        const lp=new LogonPage()
        lp.visit()
        lp.fillEmail('techcx1@gmail.com')
        lp.fillPassword ('Golivetest1')
        lp.submit()

        cy.title().should('be.equal', 'GoliveTest')
    
        lp.logout()
    })

})