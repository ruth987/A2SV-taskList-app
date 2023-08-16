import { Provider } from 'react-redux';
import store from '../../src/app/store';
import TaskList from '../../src/task/TaskList';

describe('<TaskList /> Component Test', () => {
  beforeEach(() => {
    cy.mount(<Provider store={store}><TaskList /></Provider>);
  });

  it('renders tasks correctly', () => {
      cy.get('[data-cy="task"]').each(($taskElement, index) => {
      cy.wrap($taskElement).find('.text-lg').should('exist'); 
      cy.wrap($taskElement).find('.text-gray-600').should('exist'); 
    });
  });
  
  it('completes and deletes tasks', () => {
    cy.get('[data-cy="task"]').eq(0).find('.bg-green-500').click(); 
    cy.get('[data-cy="task"]').eq(0).find('svg').should('exist');

    cy.get('[data-cy="task"]').eq(1).find('.bg-green-500').click(); 
    cy.get('[data-cy="task"]').eq(1).find('.bg-green-500').should('not.exist');

    cy.get('[data-cy="task"]').eq(2).find('.bg-green-500').click();
    cy.get('[data-cy="task"]').eq(2).find('.bg-green-500').should('not.exist'); 

    cy.get('[data-cy="task"]').eq(3).find('.bg-green-500').click(); 
    cy.get('[data-cy="task"]').eq(3).find('.bg-green-500').should('not.exist');

    cy.get('[data-cy="task"]').eq(4).find('.bg-green-500').click();
    cy.get('[data-cy="task"]').eq(4).find('button').contains('Delete').click();
    cy.get('[data-cy="task"]').eq(4).should('not.exist'); 
  });
  
  it('edits a task', () => {
    const newTitle = 'New Title';
    const newContent = 'New Content';

    cy.get('[data-cy="task"]').eq(0).find('button').contains('Edit').click(); 
    cy.get('input[type="text"]').clear().type(newTitle);
    cy.get('textarea').clear().type(newContent);
    cy.contains('Save').click();

    cy.get('[data-cy="task"]').eq(0).should('contain', newTitle);
    cy.get('[data-cy="task"]').eq(0).should('contain', newContent);
  });
  
  it('filters tasks based on completed state', () => {

    cy.get('[data-cy="task"]').eq(0).find('.bg-green-500').click();

    cy.contains('Show Completed Tasks').click();
    cy.get('[data-cy="task"]').should('contain', 'Completed Task Title'); 

    cy.contains('Show All Tasks').click();
    cy.get('[data-cy="task"]').should('contain', 'Task Title'); 
  });

});
