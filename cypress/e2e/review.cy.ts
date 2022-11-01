import {} from "cypress";

describe("Visit HomePage", () => {
  it("Check homepage url", () => {
    cy.visit("localhost:3000");
  });
});

describe("Login and sign up", () => {
  it("Check sign in", () => {
    cy.get("button").contains("Sign in").click();
  });
  it("Check if user exist", () => {
    cy.get("div[id='sign']").get('input[id="email"]').type("ble@gmail.com");
    cy.get("div[id='sign']").get('input[id="password"]').type("password");

    cy.get("div[id='sign']")
      .get("button")
      .contains("Sign in...")
      .click()
      .should("have.thrown", "Error: user with this email doesn't exist");
  });
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
