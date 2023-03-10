class DeleteBoard {
  get configurationBtn() {
    return cy.get(
      '[data-cy="organization-configuration"] > span > div > a[class="vs-c-site-logo"]'
    );
  }

  get deleteBtn() {
    return cy.get(".vs-c-btn--spaced").eq(2);
  }
}
export const deleteBoard = new DeleteBoard();
