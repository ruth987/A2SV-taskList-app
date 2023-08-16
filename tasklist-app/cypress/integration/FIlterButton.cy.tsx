import { Provider } from 'react-redux';
import React from 'react';
import FilterButton from '../../src/task/FilterButton';
import store from '../../src/app/store'; 


describe('<FilterButton />', () => {
  it('renders', () => {
    cy.mount(<Provider store={store}><FilterButton /></Provider>);
    cy.get('button').should('exist');
  });

  it('toggles filter when clicked', () => {
    cy.mount(<Provider store={store}><FilterButton /></Provider>);
    cy.get('button').click();

  })
}
)
