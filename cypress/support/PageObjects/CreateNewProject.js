class CreateNewProject

{
   
    CreateProject()
    {
    //const button=cy.get('[class=btn-2]').contains('Create Project')
    //button.click()
    cy.wait(2000)
    cy.get('.add-project > .btn-2').click()
       
    }
    
    ProjectTitle(value)

    {

        const field =cy.get('[id=project_name')
        field.clear()
        field.type('Usability Test')
        return this

    }

    Description(value)

    {
        const field =cy.get('[id=description')
        field.clear()
        field.type('Please think out loud while carrying out your task')
        return this

    }
    
}

export default CreateNewProject