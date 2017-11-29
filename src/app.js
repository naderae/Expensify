import React from 'react';
import ReactDOM from 'react-dom';
// the provider allows us to proviude the store to all our componenets in the application
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense( { description: 'water bill', amount: 4500 }));
store.dispatch(addExpense( { description: 'gas bill', createdAt: 1000 }));
store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters );

console.log(visibleExpenses);

// here, you are passing the store prop to all of the components in the application
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);




ReactDOM.render(jsx, document.getElementById('app'));
// here we are overriding the default buy providing our own props
//////dff
