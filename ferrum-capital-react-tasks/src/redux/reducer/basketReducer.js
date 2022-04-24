const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "BASKET/LOAD_ITEMS":
      return {
        ...state,
        items: action.payload,
      };

    case "BASKET/ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            name: action.payload,
          },
        ],
      };

    default:
      return state;
  }
}

export default reducer;
