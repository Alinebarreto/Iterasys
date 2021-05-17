import * as GETUser from "../requests/GETuser.request";

describe("GET User", () => {
    it("List all users", () => {
      GETUser.allUsers().should((Response) => {
        expect(Response.status).to.eql(200);
        expect(Response.body).to.be.not.null;  
      })  
    });
});