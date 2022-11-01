import {} from "cypress";

describe("Visit HomePage", () => {
  it("Check homepage url", () => {
    cy.visit("localhost:3000");
  });
});

describe("Open advanced search", () => {
  it("Check if advanced search works", () => {
    cy.get("button").contains("Advanced search").click();
  });
  it("Check if type works", () => {
    cy.get("button").contains("fire").click();
    cy.get("[id=cards]").first().should("contain.text", "fire");
  });
  it("Check multiple types", () => {
    cy.get("button").contains("normal").click();
    cy.get("[id=cards]").should("contain.text", "fire" && "normal");
  });
  it("Testing load more button ", () => {
    cy.get("button").contains("Load More").click();
  });
});
