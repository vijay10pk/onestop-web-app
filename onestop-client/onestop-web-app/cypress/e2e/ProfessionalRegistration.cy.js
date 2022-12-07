/// <reference types="cypress"/>

it('Professional Registration', function() {
    cy.visit('http://onestopapp.s3-website.us-east-2.amazonaws.com/')
    cy.get('[href="/register"] > button').click()
    cy.get('#userName').type('New pro')
    cy.get('#email').type('newpro@gmail.com')
    cy.get('#mobileNumber').type('2342342553')
    cy.get('#password').type('Password@123')
    cy.get('#password2').type('Password@123')
    cy.get('#address').type('5112 ST Apt 10')
    cy.get(':nth-child(7) > .form-control').select('Salon')
    cy.get('.btn2').click()
})