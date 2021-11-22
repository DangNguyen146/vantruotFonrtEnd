import {
  LIST_WHEELS_REQUEST,
  LIST_WHEELS_SUCCESS,
  LIST_WHEELS_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const listWheelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_WHEELS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_WHEELS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case LIST_WHEELS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listWheelsReducer;
