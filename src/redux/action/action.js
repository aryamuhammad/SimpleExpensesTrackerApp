export const ADD_TRANSACTION = "ADD_TRANSACTION";

export function addTransaction(data) {
  console.log(data);
  return {
    type: ADD_TRANSACTION,
    payload: data,
  };
}
