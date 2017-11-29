import React from 'react';
// this connects you component to the redux store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// this is the higher order compoenent
// here, you are returning props (expenses) that get passed into the function above and used
// this is how you connect them to the state, and pass them into the function to use.
// as the store changes, mapStateToProps will rub to get the newest values into the component.
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)

  };
}


export default connect(mapStateToProps)(ExpenseList);
/// the first argument is the things we want to get off the store andsave them as props, and the secondis the component we want to create the connected version of.
