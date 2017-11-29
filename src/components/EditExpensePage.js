import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {

  return (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dipatch(editExpense( props.expense.id, expense))
        props.history.push('/');
      }}
    />
    <button onClick={(e) => {
      props.dispatch(removeExpense({ id: props.expense.id }));
      props.history.push('/');
    }} >Remove</button>
  </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);


/// the router renders the higher order compoenent, the HOC passes props to the component
/// once you get the prop from the store, you can pass it in to your regular component to use from props.
