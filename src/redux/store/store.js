import { combineReducers, createStore } from "redux";
import balanceReducer from "../reducers/balanceReducer";
import transactionReducer from "../reducers/transactionReducer";

const Reducers = combineReducers({
  balance: balanceReducer,
  transaction: transactionReducer,
});
const store = createStore(Reducers);

export default store;
