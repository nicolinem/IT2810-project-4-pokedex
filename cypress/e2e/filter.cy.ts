import {} from "cypress";

describe("Visit HomePage", () => {
  it("Check homepage url", () => {
    cy.visit("localhost:3000");
  });
});

describe("Open advanced search", () => {
  it("Check if advanced search works", () => {
    cy.get("button").contains("Advanced Search").click();
  });
  it("Check if type works", () => {
    cy.get("button").contains("fire").click();
    cy.get("div[card]").contains("fire");
  });
});
