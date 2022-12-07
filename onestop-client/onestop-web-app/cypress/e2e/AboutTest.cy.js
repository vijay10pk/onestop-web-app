/// <reference types="cypress"/>

it('About Test', function() {
    cy.visit('http://onestopapp.s3-website.us-east-2.amazonaws.com/')
    cy.contains('About').click()
    cy.get('h1').contains('About Us')
    cy.get('h2').contains('Who are we?')
    cy.get('p').contains('OneStop emphasizes hiring people to provide the required services. It is a one-stop solution wherein users can hire professionals who can perform the required task through a single tap. Users can hire service professionals for home maintenance which include gardening, carpet cleaning & replacement, plumbing, electrical work, floor cleaning, repair works, painters, Ac service, Car cleaning, Sofa cleaning, home salon, and much more. Users can search and choose the best service provider in the town and can book an appointment on an hourly basis. It also allows professionals to register in the OneStop app and it will help them get clients and improve their business. In addition, this not only helps customers but also generates free-lancing jobs for people. People can earn in their free time.')
})