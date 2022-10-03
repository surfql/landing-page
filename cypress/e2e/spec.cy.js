describe("Accessibility Check", () => {
  it("passes", () => {
    cy.visit("http://surfql-static-site.s3-website-us-east-1.amazonaws.com/");

    cy.get("img").each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
    });
  });
});
