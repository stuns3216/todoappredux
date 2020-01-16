import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actions/actionsType";
const initState = { items: ["item1", "item2"] };

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((el, i) => i !== action.payload)
      };
    default:
      return state;
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((el, i) =>
         ( i == action.payload.id) ? el = action.payload.item: el
        )
      }
  }
};

export default Reducer;
