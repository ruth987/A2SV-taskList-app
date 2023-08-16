describe('Task List App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/'); 
  });

  it('adds a new task', () => {
    cy.get('[data-cy="task-title-input"]').type('New Task Title');
    cy.get('[data-cy="task-content-input"]').type('New Task Content');
    cy.get('[data-cy="submit-button"]').click();
    cy.contains('New Task Title');
  });

  it('marks a task as completed', () => {
    cy.get('[data-cy="task-title-input"]').type('New Task Title');
    cy.get('[data-cy="task-content-input"]').type('New Task Content');
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="task"]').should('have.length', 1);

    cy.get('[data-cy="task"]').find('.bg-green-500').click();
    cy.get('[data-cy="task"]').find('svg').should('exist');
  });

  it('deletes a task', () => {
    cy.get('[data-cy="task-title-input"]').type('New Task Title');
    cy.get('[data-cy="task-content-input"]').type('New Task Content');
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="task"]').should('have.length', 1);

    cy.get('[data-cy="task"]').find('.bg-green-500').click();
    cy.get('[data-cy="delete-button"]').click();
    cy.get('[data-cy="task"]').should('not.exist');
  });

  it('handles edge cases', () => {
    cy.get('[data-cy="add-task-button"]').click();
    cy.get('[data-cy="submit-button"]').click(); 
    cy.contains('Please enter a title');

    cy.get('[data-cy="delete-button"]').click(); 
    cy.contains('No task selected');
  });

  // it('verifies state management', () => {
  //   // Write tests to verify that state management (using the taskSlice) works correctly
  // });
});
