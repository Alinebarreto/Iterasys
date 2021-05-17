/// <reference types="cypress" />

function allPets() {
    
    return cy.request({
        method: "GET",
        url: "pet/405060",
        failOnStatusCode: false,
    })
}

export { allPets };