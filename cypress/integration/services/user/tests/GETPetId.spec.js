import * as GETPetId from "../requests/GETPetId.request";

describe("GET Pet Id", () => {
    it("List all pets", () => {
      GETPetId.allPets().should((Response) => {
        expect(Response.status).to.eql(200);
        expect(Response.body).to.be.not.null;
        expect(Response.body.name).to.eql("Brutus")  
      })  
    });
});