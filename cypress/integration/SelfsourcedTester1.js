describe("Self Sourced Tester", function() {
  
  
  //beforeEach('Self Sourced Tester', () => {

    //cy.server()
    //cy.route('POST', '**/add','fixtures:add.json')
  //})
  

  it("should submit request for self sourced tester", function() {


      cy.visit("http://uat.golivetest.com/glt/user/login");
     
      ///Login journey

      cy.get("#userName").type("rushik.p@msp-group.co.uk");
      
      cy.get("#password").type("Msp@2019");
      
      cy.get(".button-primary").click();

        

      ///Create New Self Sourced Project journey

      cy.get('.box-header > :nth-child(4) > a > .btn').click()
      
      cy.get('#project_name').type ('dateTesting the test creation');
      
      cy.get('#description').type('Please think out loud');

      cy.get('#self_sourced_tester').type ('1');

      cy.get('[name="number_of_link"]').type ('1')

      cy.get('#tasktitle').type('Techcx')

      cy.get('.box-body > .task_section > .classAddmode > .task > :nth-child(2) > .task_cls').type('https://golivetest.com')

      cy.wait(500)

      cy.get('#taskdescription').type('While thinking out loud, Talk about the home page value')  

      cy.get('.box-body > .task_section > .classAddmode > .task_question > .vc_col-lg-12s').type('Did it make sense?')

      
      cy.get('.box-body > .task_section > .classAddmode > .task_question > .vc_col-lg-9s > .Answertype > .form-control').select('2')
      
      cy.get('.previewcls').click()

      cy.wait(5000)  

      /// Launch Confirmation journey
      
      cy.get('#submit').click()

       ///Checkout journey

       cy.get('#submit').click()

       ///Confirmation journey

       cy.contains('Confirmation').should('be.visible') 
       cy.url().should('include', '/confirmation/')

       ///Direct to Dashnoard journey
       cy.get('.color_50c878').click()
      
      
      
  
    });
  });