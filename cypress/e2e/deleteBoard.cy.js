/// <reference types="Cypress" />

import { deleteBoard } from "../page_objects/deleteBoard";
import { addBoard } from "../page_objects/addBoard";

describe("delete board test", () => {
  before("log into the app", () => {
    cy.loginBefore();
    cy.visit("/");
  });

  it("delete board", () => {
    let boardName = "My new board";
    addBoard.createNewBoard(boardName);
    deleteBoard.configurationBtn.click();
  });
});
