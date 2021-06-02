describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5504/");
  });
  it("Should contain 0", () => {
    cy.get(".zero").contains("0");
  });
});

describe("Addition operator", () => {
  it("Should equal 10", () => {
    cy.get(".five").click();
    cy.get(".calculator__buttons__op__add").click();
    cy.get(".five").click();
    cy.get(".calculator__buttons__op__equal").click();
    cy.get(".display").should("have.value", 10);
  });
});

describe("clear operator", () => {
  it("Should clear", () => {
    cy.get(".calculator__buttons__op__clear").click();
    cy.get(".display").should("have.value", 0);
  });
});

describe("minus operator", () => {
  it("Should equal 2", () => {
    cy.get(".eight").click();
    cy.get(".calculator__buttons__op__minus").click();
    cy.get(".six").click();
    cy.get(".calculator__buttons__op__equal").click();
    cy.get(".display").should("have.value", 2);
  });
});

describe("clear operator", () => {
  it("Should clear", () => {
    cy.get(".calculator__buttons__op__clear").click();
    cy.get(".display").should("have.value", 0);
  });
});

describe("divide operator", () => {
  it("Should equal 3", () => {
    cy.get(".nine").click();
    cy.get(".calculator__buttons__op__divide").click();
    cy.get(".three").click();
    cy.get(".calculator__buttons__op__equal").click();
    cy.get(".display").should("have.value", 3);
  });
});
