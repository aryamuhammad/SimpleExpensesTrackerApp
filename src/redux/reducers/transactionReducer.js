const initialState = {
  data: [
    {
      id: 1,
      name: "Makan Siang",
      amount: 20000,
      category: "Makanan dan Minuman",
      date: "2022/12/6",
    },
    {
      id: 2,
      name: "Top Up Gopay",
      amount: 50000,
      category: "Pembayaran",
      date: "2022/12/6",
    },
    {
      id: 3,
      name: "Gojek ke Kampus",
      amount: 15000,
      category: "Transportasi",
      date: "2022/12/6",
    },
  ],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default transactionReducer;
