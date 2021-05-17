import * as POSTUser from "../requests/POSTUser.request";

context("POST User", () => {
    it("Add a new user", () => {
      POSTUser.addUser().should((Response) =>{
        expect(Response.status).to.eql(200);
        expect(Response.body.message).to.eql("102030");
        expect(Response.body.type).to.eql("unknown");
      })  
    });
});