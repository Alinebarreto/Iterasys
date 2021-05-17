/// <reference types="cypress" />

const payloadDogSale = require("../payloads/add-dog-sale.json")

function addDogSale () {
  return cy.request({
    method: "POST",
    url: "store/order",
    failOnStatusCode: false,
    body: payloadDogSale
  })  
}

export { addDogSale };