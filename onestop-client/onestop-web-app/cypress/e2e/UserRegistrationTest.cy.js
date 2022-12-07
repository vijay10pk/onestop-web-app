/// <reference types="cypress"/>

it('User Registration Test', function() {
    cy.visit('http://onestopapp.s3-website.us-east-2.amazonaws.com/')
    cy.contains('Login/Sign Up').click()
    cy.get('#signup').click()
    cy.get('#userName').type('New User')
    cy.get('#email').type('newuser@gmail.com')
    cy.get('#phoneNumber').type('2342342443')
    cy.get('#password').type('Password@123')
    cy.get('#password2').type('Password@123')
    cy.contains('Submit').click()
    cy.contains('WELCOME NEW USER')
})