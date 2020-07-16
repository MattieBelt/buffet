const initialState = {
  date: null,
  displayedDate: '',
  isFocused: false,
  isVisible: false,
  visibleDate: '',
  isYearSelectVisible: false,
};

function reducer(state, action) {
  const { date, displayedDate, isFocused, isVisible, type } = action;

  switch (type) {
    case 'SET_DATE':
      return { ...state, date, displayedDate };
    case 'SET_DISPLAYED_DATE':
      return { ...state, displayedDate };
    case 'SET_IS_FOCUSED':
      return { ...state, isFocused };
    case 'SET_IS_VISIBLE':
      return { ...state, isVisible };
    case 'SET_IS_YEAR_SELECT_VISIBLE':
      return { ...state, isYearSelectVisible: !state.isYearSelectVisible };
    default:
      return state;
  }
}

export default reducer;
export { initialState };
