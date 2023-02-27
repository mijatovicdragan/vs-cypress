import { add, find } from "lodash";

class AddBoard {
  get organizationButton() {
    return cy.get(".vs-c-my-organization__content").first();
  }

  get okBtn() {
    return cy.get(".vs-c-btn--lg");
  }

  get addNewBoard() {
    return cy.get(".vs-c-organization-boards__item--add-new");
  }

  get titleInput() {
    return cy.get("input[type='text']").last();
  }

  get nextButton() {
    return cy.get("button[name='next_btn']");
  }

  get canbanCheck() {
    return cy.get(".vs-c-modal--board-type-form").find("input");
  }

  createNewBoard(boardName) {
    addBoard.organizationButton.click();
    addBoard.okBtn.click();
    addBoard.addNewBoard.click();
    addBoard.titleInput.type(boardName);
    addBoard.nextButton.click();
    addBoard.canbanCheck.check({ force: true });
    addBoard.nextButton.click();
    addBoard.nextButton.click();
    addBoard.nextButton.click();
    addBoard.nextButton.click();
  }
}

export const addBoard = new AddBoard();
