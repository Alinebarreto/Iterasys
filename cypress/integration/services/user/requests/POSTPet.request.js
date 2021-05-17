/// <reference types="cypress" />

const payloadAddPet = require("../payloads/add-pet.json")

function addPet () {
  return cy.request({
    method: "POST",
    url: "pet",
    failOnStatusCode: false,
    body: payloadAddPet
  })  
}

export { addPet };