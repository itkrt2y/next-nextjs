import { mount } from "@cypress/react";
import { H1, H2 } from "~/components/heading";
import "~/src/index.css";

describe("H1", () => {
  it("shows title", () => {
    const title = "Hello h1!";
    mount(<H1>{title}</H1>);
    cy.get("h1").should("have.text", title);
  });
});

describe("H2", () => {
  it("shows title", () => {
    const title = "Hello h2!";
    mount(<H2>{title}</H2>);
    cy.get("h2").should("have.text", title);
  });
});
