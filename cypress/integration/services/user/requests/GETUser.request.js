/// <reference types="cypress" />

function allUsers() {
    
    return cy.request({
        method: "GET",
        url: "user/MariaA",
        failOnStatusCode: false,
    })
}

export { allUsers };