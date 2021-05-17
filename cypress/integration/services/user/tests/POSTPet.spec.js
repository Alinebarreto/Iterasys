import * as POSTPet from "../requests/POSTPet.request";

context("POST Pet", () => {
    it("Add a new pet", () => {
      POSTPet.addPet().should((Response) =>{
        expect(Response.status).to.eql(200);
        expect(Response.body.status).to.eql("available");
        expect(Response.body.name).to.eql("Brutus")
      })  
    });
});