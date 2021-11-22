import {
  LIST_TRUCKS_REQUEST,
  LIST_TRUCKS_SUCCESS,
  LIST_TRUCKS_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const listTrucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TRUCKS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_TRUCKS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case LIST_TRUCKS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listTrucksReducer;
