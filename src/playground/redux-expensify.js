
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description:'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description:'coffee', amount: 300, createdAt: -1000 }));

//
//
// store.dispatch(removeExpense( { id: expenseOne.expense.id }))
//
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ))
store.dispatch(setTextFilter('rent'));
//
//
// store.dispatch(sortByAmount()); // sort by property set to date
// store.dispatch(sortByDate()); // sort by property set to date
//
//
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
//
//




const demoState= {
  expenses: [{
    id: 'myid',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};



////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////







import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Add expenses

// the properties(description, note, etc..) come from the user input

const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

//remove expense

const removeExpense = (expense) => ({
  type: 'REMOVE_EXPENSE',
  id: expense.id
});


//edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
  }
);


// set text filters
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
  }
);

// sort_by_date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


// sort_by_amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//set start date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});



// set end date

const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});




// Expenses Reducers
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(( expense ) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// get visible expenses
// const getVisibleExpenses = (expenses, filters) => {
//   return expenses
}

//timestamps (milliseconds)
// time0 = jan 1 1970
//

//destructured version
// this functions actually allows us to filter and sort through the expenses data
// here, we the expenses in the store and the filter to see what actually gets rendered to the screen
// after the data passes through the reducers, it comes over here to be filtered and sorted.
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy ==='amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}
// return -1 if a should come first, return 1 if be should come first

// store creation for multiple Reducers
// were saying that the expenses property should be handled by the expenses reducer

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);




store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description:'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description:'coffee', amount: 300, createdAt: -1000 }));

//
//
// store.dispatch(removeExpense( { id: expenseOne.expense.id }))
//
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ))
store.dispatch(setTextFilter('rent'));
//
//
// store.dispatch(sortByAmount()); // sort by property set to date
// store.dispatch(sortByDate()); // sort by property set to date
//
//
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
//
//



// this is how we want the state to look like
const demoState= {
  expenses: [{
    id: 'myid',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
