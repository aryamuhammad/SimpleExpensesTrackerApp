import { ADD_TRANSACTION } from "../action/action";

const initialState = [
  {
    id: 1,
    name: "Makan Siang",
    amount: 20000,
    category: "fnb",
    date: "2022/12/6",
  },
  {
    id: 2,
    name: "Top Up Gopay",
    amount: 50000,
    category: "payment",
    date: "2022/12/6",
  },
  {
    id: 3,
    name: "Gojek ke Kampus",
    amount: 15000,
    category: "transport",
    date: "2022/12/6",
  },
];

const transactionReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TRANSACTION:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default transactionReducer;
