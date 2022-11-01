import {} from "cypress";

describe("Visit HomePage", () => {
  it("Check homepage url", () => {
    cy.visit("localhost:3000");
  });
});

describe("Login", () => {
  it("If user exist", () => {
    cy.get("button").contains("Sign in").click();
    cy.get("input[id='email']").type("test123@gmail.com");
    cy.get("input[id='password']").type("gruppe1");
    cy.get("button").contains("Sign in...").click();
  });
});

describe("Leave review", () => {
  it("Check review page", () => {
    cy.get("div[id='card']").first().click();
    cy.get("button").contains("Reviews").click();
  });
  it("Leave a review", () => {
    cy.get("div[id='rating']").type("5");
    cy.get("input[id='review']").type("This is a test review");
    cy.get("button").contains("Submit").click();
  });
  it("Check if review is visible", () => {
    cy.get("div[id='reviews']").should("contain.text", "This is a test review");
  });
});
