export const initialState = {
  list: [],
  received: false,
};

/**
 * action => {
 *  type: String,
 *  payload: any
 * }
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        list: action.payload,
        received: true,
      };
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        list: state.list.map((elem) =>
          elem.id === action.payload.id ? action.payload : elem
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        list: state.list.filter((elem) => elem.id !== action.payload.id),
      };
    default:
      return state;
  }
};
