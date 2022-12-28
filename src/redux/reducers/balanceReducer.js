import { EDIT_BALANCE } from "../action/action";

let initialState = 0;
if (localStorage.getItem("balance")) {
  initialState = JSON.parse(localStorage.getItem("balance"));
}

const balanceReducer = (state = initialState, action) => {
  const saldo = parseInt(action.payload);
  switch (action.type) {
    case EDIT_BALANCE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default balanceReducer;
