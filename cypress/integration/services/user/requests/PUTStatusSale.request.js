/// <reference types="cypress" />

const payloadChangeStatusSale = require("../payloads/change-status-sale.json")

function changeStatusSale () {
  return cy.request({
    method: "PUT",
    url: 'pet',
    failOnStatusCode: false,
    body: payloadChangeStatusSale
  })  
}

export { changeStatusSale };