import {
  LIST_DECKS_REQUEST,
  LIST_DECKS_SUCCESS,
  LIST_DECKS_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const listDecksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DECKS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_DECKS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case LIST_DECKS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listDecksReducer;
