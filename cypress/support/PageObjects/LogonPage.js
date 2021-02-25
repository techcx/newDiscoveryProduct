class LogonPage

{

visit()

{

    cy.visit("http://uat.golivetest.com/glt/user/login")
}

fillEmail(value)

{

    const field =cy.get('[id=userName]')
    field.clear()
    field.type(value)
    return this
}

fillPassword(value)

{

    const field =cy.get('[id=password]')
    field.clear()
    field.type(value)
    return this
}

submit() //type css selector

{

    const button=cy.get('[class=button-primary]')
    button.click()

}

login(userName, password)

{

this.visit()
this.fillEmail(userName)
this.fillPassword(password) 
this.submit()   

}

logout()

{

    cy.get('.sf-with-ul > .link-inner').click()
    cy.contains('Logout').click()
    //('[class=Logout]')
 


}



}
export default LogonPage
