describe("GridView", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should display the list of programmes heading", () => {
    cy.get("h2").should("be.visible").and("contain", "List of Programmes");
  });

  it("checks if headings exist", () => {
    cy.get("h2").should("be.visible");
  });

  it("should display the grid view", () => {
    cy.get(".programme__grid").should("be.visible");
  });

  it("checks to see if 3 rows are displayed", () => {
    cy.get(".programme__grid .programme__grid__card")
      .its("length")
      .should("be.gte", 3);
  });

  it("checks if grid view has correct data", () => {
    const expectedData = [
      {
        name: "Doctor Who",
        genre: "Sci-Fi",
        rating: 4,
        comments: "Great show!",
      },
      {
        name: "Peaky Blinders",
        genre: "Crime",
        rating: 5,
        comments: "Perfect!",
      },
      {
        name: "RuPaul's Drag Race: UK vs. the World",
        genre: "Entertainment",
        rating: 4,
        comments: "Great show!",
      },
      {
        name: "Inside No. 9",
        genre: "Comedy Drama",
        rating: 5,
        comments: "Perfect!",
      },
      { name: "Shetland", genre: "Drama", rating: 3, comments: "Good show!" },
      {
        name: "His Dark Materials",
        genre: "Fantasy",
        rating: 4,
        comments: "Great show!",
      },
      { name: "Eastenders", genre: "Soap", rating: 3, comments: "Good show!" },
    ];

    expectedData.forEach((data, index) => {
      cy.get(".programme__grid .programme__grid__card")
        .eq(index)
        .within(() => {
          cy.get("h3").should("contain", data.name);
          cy.get("p").should("contain", data.rating);
        });
    });
  });

  it("checks if action buttons are displayed", () => {
    cy.get(".programme__item").should("be.visible");
  });
});
