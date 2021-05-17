import * as POSTDogSale from "../requests/POSTDogSale";

context("POST Dog Sale", () => {
    it("Add a new dog sale", () => {
      POSTDogSale.addDogSale().should((Response) =>{
        expect(Response.status).to.eql(200);
        expect(Response.body.status).to.eql("placed");
        expect(Response.body.complete).to.eql(true)
      })  
    });
});