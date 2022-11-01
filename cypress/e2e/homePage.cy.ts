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
    //cy.get("input[email]").type("test@gmail.com");
    //cy.get("input[password]").type("password");
    cy.get("button").contains("Sign in").click().should("");
  });
});

describe("Pokemon cards", () => {
  it("Check if pokemon cards are visible", () => {});
  it("Check pokemon cards amount", () => {
    cy.get("div[id='card']").should("have.length", 25);
  });

  it("Check load more button", () => {
    cy.get("button").contains("Load more").click();
    cy.get("div[id='card']").should("have.length", 50);
  });

  it("Check if pokemon cards are clicable and routing", () => {
    cy.get("div[id='card']").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pokemon/1");
    });
  });
});
