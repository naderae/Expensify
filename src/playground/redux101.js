import { createStore } from 'redux';

///Action generator: a function that creates actions for us
/// payload is the name of the object passed in, so payload.incremenyBy is what the person passes in

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });




/// we can destructure the arguments inside, so that we have access to them easiy inside the function.
// we also set a default value if an argument is provided. if not, it will default to an empty object
// here, you are destructuring payload to become incrementBy
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

//action generator for decrement
// we use destructuring so we can refer to decrementBy easily
 const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy: decrementBy
 });

 //action generator for setCount
 const setCount = ( { count } = {} ) => ({
   type: 'SET',
   count: count
 });

 //action generator for resetCount
 const resetCount = () => ({
   type: 'RESET'
 });

///Reducers
// 1. reducers are pure function: output purely depends on the arguments passed in.
// 2. never change state or action, you dont want to reassign the value, you want to return an onject the represents the new state.
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
    }
  };



const store = createStore(countReducer);

// watch for changes to the store state:subscribe calls a function everytime the store state changes

// store.subscribe(() => {
//   console.log(store.getState());
// });

// to unsubscribe

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Action - object that gets sent to the store, and describes the action we want to take
//action1: Ide like to increment the count
// the createStore function runs once to setup the default state, and a second time to change the state.
// it will run the dispacch function the second time!

store.dispatch(incrementCount({ incrementBy: 5}));
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10}));

store.dispatch(setCount( {count: 100} ));
