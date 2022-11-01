describe("Visit HomePage", () => {
  it("Check homepage url", () => {
    cy.visit("localhost:3000");
  });
});

describe("Check search field", () => {
  it("Check if search field is visible", () => {
    cy.get("input").should("be.visible");
  });
  it("Check if search field is working", () => {
    cy.get("input").type("bulbasaur");
    cy.get("button").contains("Search").click();
    cy.get("div[id='card']").should("have.length", 1);
  });
});
