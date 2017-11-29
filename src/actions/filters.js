

// set text filters
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
  }
);

// sort_by_date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


// sort_by_amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//set start date
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});



// set end date

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});
