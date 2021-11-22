import {
  LIST_ITEMS_REQUEST,
  LIST_ITEMS_SUCCESS,
  LIST_ITEMS_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const listItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ITEMS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_ITEMS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case LIST_ITEMS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listItemsReducer;
