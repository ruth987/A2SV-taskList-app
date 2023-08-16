
import { Provider } from 'react-redux';
import React from 'react';
import AddTaskForm from '../../src/task/AddTaskForm';
import store from '../../src/app/store'; 

describe('<AddTaskForm />', () => {
  it('renders', () => {
    cy.mount(<Provider store={store}><AddTaskForm /></Provider>);
    cy.get('h3').should('exist');
  });

  it('adds a new task', () => {
    cy.mount(<Provider store={store}><AddTaskForm /></Provider>);
    cy.get('input[placeholder="Add a task title"]').type('New Task');
    cy.get('textarea[placeholder="Add a task description"]').type('Task Description');
    cy.get('button').contains('Add Task').click();

  });
});
