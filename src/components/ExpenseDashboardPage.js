import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    {/*usually you set the props here, but when getting stuff from the store, we do it in the mapstatetoProp function*/}
  </div>
);

export default ExpenseDashboardPage;
