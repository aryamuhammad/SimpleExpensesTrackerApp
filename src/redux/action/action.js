export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const EDIT_BALANCE = "EDIT_BALANCE";

export function addTransaction(data) {
  return {
    type: ADD_TRANSACTION,
    payload: data,
  };
}

export function editBalance(data) {
  return {
    type: EDIT_BALANCE,
    payload: data,
  };
}
