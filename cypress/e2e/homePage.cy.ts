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
    //cy.get("button").contains("Sign in").click().should("");
    cy.get("path").click();
  });
});

describe("Pokemon cards", () => {
  it("Check if pokemon cards are visible", () => {});
  it("Check pokemon cards amount", () => {
    cy.get("div[id='card']").should("have.length", 24);
  });

  it("Check load more button", () => {
    cy.get("button").contains("Load More").click();
    cy.get("div[id='card']").should("have.length", 48);
  });

  it("Check if pokemon cards are clicable and routing", () => {
    cy.get("div[id='card']").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pokemon/1");
    });
  });
  it("Test Tilbake button", () => {
    cy.get("button").contains("Back to Search Page").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});

describe("Check if default Pokemon Page is after id", () => {
  it("Check if pokemon page is after id", () => {
    cy.get("div[id='card']").first().click();
    cy.contains("Bulbasaur");
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pokemon/1");
    });
  });
});
