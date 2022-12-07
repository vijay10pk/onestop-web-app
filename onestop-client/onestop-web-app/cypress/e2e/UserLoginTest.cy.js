/// <reference types="cypress"/>

it('Positive Flow', function() {
    cy.visit('http://onestopapp.s3-website.us-east-2.amazonaws.com/')
    cy.contains('Login/Sign Up').click()
    cy.get('#email').type('vijay@mail.com')
    cy.get('#password').type('Password@123')
    cy.get('.btn2').click()
    cy.get('#homepage > :nth-child(1)').click()
    cy.get('.sub > :nth-child(1)').click()
    cy.get(':nth-child(1) > .name-price > .btn2').click()
    cy.get(':nth-child(1) > .name-price > .btn3').click()
    cy.contains('Go To Cart').click()
    cy.contains('Proceed To Checkout').click()
    cy.get('h1').contains("Thank you for choosing OneStop");
    cy.get('.checkout-page > :nth-child(2)').contains("Your services are booked")
    cy.get('.checkout-page > :nth-child(3)').contains("Our team will reach out soon!!")
    cy.contains('LOGOUT').click()
})