import { combineReducers } from "redux";
import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import datHangReducer from "./../../components/CardItem/Modules/reducer";
import listDecksReducer from "../../container/HomeTemplate/ListItem/modules/reducer";
import listTrucksReducer from "./../../container/HomeTemplate/DetaiPageTruck/modules/reducer";
import listWheelsReducer from "./../../container/HomeTemplate/DetaiPageWheel/modules/reducer";
import listItemsReducer from "./../../container/HomeTemplate/DetailPage/modules2/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  datHangReducer,
  listDecksReducer,
  listTrucksReducer,
  listWheelsReducer,
  listItemsReducer,
});

export default rootReducer;
