/// <reference types= "cypress"/>

cy.on("fail", (err, runnable) => {
  return false;
});

describe("Magento Items test from certain category", () => {
  it("Women's Page Test", () => {
    // Visit the website
    cy.visit("https://magento.softwaretestingboard.com/");

    // Choose women's category
    cy.get("#ui-id-4").click();

    // choose random grid
    let randomItem = Math.floor(Math.random() * 4);
    cy.get(".products-grid.grid")
      .find("div.product-item-info")
      .eq(randomItem)
      .click();

    // Wait for page to load
    cy.wait(5000);

    // Defining random color or size
    let randomOfTwo = Math.floor(Math.random() * 2);
    let randomOfThree = Math.floor(Math.random() * 3);
    let randomOfFive = Math.floor(Math.random() * 5);

    if (randomItem != 3) {
      cy.get("div.swatch-attribute-options.clearfix")
        .find("div.swatch-option.text")
        .eq(randomOfFive)
        .click();

      cy.get('[aria-labelledby="option-label-color-93"]')
        .find(".swatch-option.color")
        .eq(randomOfThree)
        .click();
    } else {
      cy.get("div.swatch-attribute-options.clearfix")
        .find("div.swatch-option.text")
        .eq(randomOfTwo)
        .click();

      cy.get('[aria-labelledby="option-label-color-93"]')
        .find(".swatch-option.color")
        .eq(randomOfThree)
        .click();
    }
    cy.get(".product-info-stock-sku > .stock > span")
      .invoke("text")
      .then((thisItem) => {
        if (thisItem == "In stock") {
          cy.get("#product-addtocart-button").click();
        } else {
          alert("item unavailable");
        }
      });
  }); // Women's it

  it("Men's Page Test", () => {
    // Visit the website
    cy.visit("https://magento.softwaretestingboard.com/");

    // Choose men's category
    cy.get("#ui-id-5").click();

    // choose random grid
    let randomItem = Math.floor(Math.random() * 4);
    cy.get(".products-grid.grid")
      .find("div.product-item-info")
      .eq(randomItem)
      .click();

    // Wait for page to load
    cy.wait(5000);

    // Defining random color or size
    let randomOfThree = Math.floor(Math.random() * 3);
    let randomOfFour = Math.floor(Math.random() * 4);
    let randomOfFive = Math.floor(Math.random() * 5);

    if (randomItem != 2 || randomItem != 3) {
      cy.get("div.swatch-attribute-options.clearfix")
        .find("div.swatch-option.text")
        .eq(randomOfFive)
        .click();

      if (randomItem == 0) {
        cy.get('[aria-labelledby="option-label-color-93"]')
          .find(".swatch-option.color")
          .click();
      } else {
        randomOfThree = Math.floor(Math.random() * 3);
        cy.get('[aria-labelledby="option-label-color-93"]')
          .find(".swatch-option.color")
          .eq(randomOfThree)
          .click();
      }
    } else {
      cy.get("div.swatch-attribute-options.clearfix")
        .find("div.swatch-option.text")
        .eq(randomOfFour)
        .click();

      cy.get('[aria-labelledby="option-label-color-93"]')
        .find(".swatch-option.color")
        .eq(randomOfThree)
        .click();
    }
    cy.get(".product-info-stock-sku > .stock > span")
      .invoke("text")
      .then((thisItem) => {
        if (thisItem == "In stock") {
          cy.get("#product-addtocart-button").click();
        } else {
          alert("item unavailable");
        }
      });
  }); // Men's it

  it("Gear's Page Test", () => {
    // Visit the website
    cy.visit("https://magento.softwaretestingboard.com/");

    // Choose women's category
    cy.get("#ui-id-4 > :nth-child(2)").click();

    //Gear's page
    cy.get(".nav-4 > .level-top > span").click();

    // Choose random item
    let randomItem = Math.floor(Math.random() * 4);
    cy.get(".products-grid.grid")
      .find("div.product-item-info")
      .eq(randomItem)
      .click();

    //Check if stock is available and if it's available; add item to cart
    cy.get(".product-info-stock-sku > .stock > span")
      .invoke("text")
      .then((thisItem) => {
        cy.log(thisItem);
        if ((thisItem == "In stock") && (randomItem != 3)) {
          cy.get("#product-addtocart-button").click();
          cy.log("item available");
        } else if ((thisItem == "In stock") && (randomItem == 3)) {
          cy.get("#bundle-slide").click();
          cy.wait(2000);
          cy.get("#product-addtocart-button").click();
        } else {
          alert("item unavailable");
        }
      });
  });
}); // describe
