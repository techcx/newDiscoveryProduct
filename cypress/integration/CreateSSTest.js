import LogonPage from '../support/PageObjects/LogonPage'
import CreateNewProject from '../support/PageObjects/CreateNewProject'

describe('GoLiveTest', function () {

    const lp=new LogonPage()
    const cp=new CreateNewProject()

    it('Validate Logins Process', function () {
        

        lp.login('techcx1@gmail.com', 'Golivetest1')

        cy.title().should('be.equal', 'GoliveTest')

        //cy.get('.add-project > .btn-2').click()

        //cy.wait(10000)

    })

    it('Create Project', function () {
        

        cp.CreateProject()
        cy.wait(1000)
        cp.ProjectTitle('Hello')
        cp.Description('Bye')


    })

})