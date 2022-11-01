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
    cy.get("div[id='sign']").get('input[id="password"]').type("ble");

    cy.get("div[id='sign']")
      .get("button")
      .contains("Sign in...")
      .click()
      .should("have.thrown", "Error: user with this email doesn't exist");
  });
  it("If user exist", () => {
    cy.get("input[id='email']").type("bløh");
    cy.get("input[id='password']").type("password");
    cy.get("button")
      .contains("Sign in")
      .click()
      .should("contain.text", "Sign Out");
  });
});
