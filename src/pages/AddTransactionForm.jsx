import { useState } from "react";
import FalseButton from "../components/FalseButton";
import Navbar from "../components/Navbar";
import TrueButton from "../components/TrueButton";

const AddTransactionForm = () => {
  const [data, setData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      amount: "",
      category: "",
      date: "",
    });
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
            />
          </div>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <label className="font-semibold">Kategori</label>
            <select
              className="px-2 py-3 outline-teal-500 rounded-lg border-2 focus:ring-teal-500 focus:border-teal-500"
              onChange={handleChange}
              name="category"
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
