import { useState, useSyncExternalStore } from "react";
import FalseButton from "../components/FalseButton";
import Navbar from "../components/Navbar";
import TrueButton from "../components/TrueButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../redux/action/action";
const AddTransactionForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const transaction = useSelector((state)=> state.transaction)
console.log(transaction.length)
  const [data, setData] = useState({
    id:transaction.length + 1,
    name: "",
    amount: "",
    category: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name == "" ||
      data.amount == "" ||
      data.category == "" ||
      data.date == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pastikan semua data terisi",
        confirmButtonColor: "#009688",
      });
    } else {
      setData({
        name: "",
        amount: "",
        category: "",
        date: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Transaksi anda berhasil dicatat!",
        confirmButtonColor: "#009688",
      });
            navigate("/transaction")
      dispatch(addTransaction(data))

    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Navbar home={false} details={false} />
      <section className="pb-40">
        <div className="px-10 py-10 shadow-md">
          <h1 className="font-bold text-center text-xl">Catat Pengeluaran</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <label className="font-semibold">Nama Pengeluaran</label>
            <input
              type="text"
              className="px-2 py-3 outline-teal-500 rounded-lg border-2"
              placeholder="Contoh: Makan Siang, Jajan, dll."
              onChange={handleChange}
              name="name"
              value={data.name}
            />
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <label className="font-semibold">Jumlah Pengeluaran</label>
            <input
              type="text"
              inputMode="numeric"
              className="px-2 py-3 outline-teal-500 rounded-lg border-2"
              placeholder="Contoh: 15000"
              onChange={handleChange}
              name="amount"
              value={data.amount}
            />
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <label className="font-semibold">Kategori</label>
            <select
              className="px-2 py-3 outline-teal-500 rounded-lg border-2 focus:ring-teal-500 focus:border-teal-500"
              onChange={handleChange}
              name="category"
              value={data.category}
            >
              <option defaultValue={"Pilih Kategori"}>Pilih Kategori</option>
              <option value="fnb">Makanan dan Minuman</option>
              <option value="transport">Transportasi</option>
              <option value="payment">Pembayaran</option>
            </select>
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <label className="font-semibold">Tanggal</label>
            <input
              type="date"
              className="px-2 py-3 outline-teal-500 rounded-lg border-2"
              onChange={handleChange}
              name="date"
              value={data.date}
            />
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <TrueButton text="Tambah" />
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <FalseButton text="Batal" />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddTransactionForm;
