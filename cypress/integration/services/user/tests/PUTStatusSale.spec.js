import * as PUTStatusSale from "../requests/PUTStatusSale.request";

context("PUT Status Sale", () => {
    it("Change a new status sale", () => {
      PUTStatusSale.changeStatusSale().should((Response) =>{
        expect(Response.status).to.eql(200);
        expect(Response.body.name).to.eql("Brutus");
        expect(Response.body.status).to.eql("delivered");
        expect(Response.body.id).to.eql(405060);
      })  
    });
});