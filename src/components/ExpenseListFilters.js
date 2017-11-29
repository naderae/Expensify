import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  } from '../actions/filters';


class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({  calenderFocused }));
  }
  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter( e.target.value));
        }} />
        <select value={this.props.filters.sortBy} onChange={(e) => {
          e.target.value === 'date' ? props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
        }}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate = {this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths ={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />

      </div>
    )
  }
};
/// inside input, we are updating the store filters, so we send a dispatch to update the store.



// here, you connect to the store so that you display whatever is in the filter state of the store as the input text.  this is what you do when you want something from the store.
const mapStateToProps = (state) => {
  return{
    filters: state.filters
  }
};

// to get access to dispatch and mapStateToProps, you need to connect that muthafucka
export default connect(mapStateToProps)(ExpenseListFilters)
