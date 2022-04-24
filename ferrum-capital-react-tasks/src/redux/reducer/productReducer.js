const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS/LOAD_PRODUCTS":
      return action.payload;

    case "PRODUCTS/ADD_PRODUCTS":
      return [
        ...state,
        {
          title: action.payload,
        },
      ];

    default:
      return state;
  }
}

export default reducer;
