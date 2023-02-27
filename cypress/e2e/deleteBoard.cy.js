/// <reference types="Cypress" />

import { deleteBoard } from "../page_objects/deleteBoard";

describe("delete board test", () => {
  cy.loginBefore();
  cy.visit("/");
  cy.url().should("not.include", "login");
});
