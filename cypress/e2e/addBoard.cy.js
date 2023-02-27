/// <reference types="Cypress" />

import { add } from "lodash";
import { addBoard } from "../page_objects/addBoard";

describe("add board test", () => {
  before("log into the app", () => {
    cy.loginBefore();
    cy.visit("/");
  });

  it("add new board", () => {
    let boardName = "My new board";
    addBoard.createNewBoard(boardName);

    cy.url().should("not.include", "my-organizations");
  });
});
