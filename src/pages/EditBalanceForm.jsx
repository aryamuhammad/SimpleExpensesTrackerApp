import Navbar from "../components/Navbar";
import TrueButton from "../components/TrueButton";
import FalseButton from "../components/FalseButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editBalance } from "../redux/action/action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditBalanceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [saldo, setSaldo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (saldo == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pastikan semua data terisi",
        confirmButtonColor: "#009688",
      });
    } else {
      setSaldo("");
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Pemasukan Anda Berhasil Diedit!",
        confirmButtonColor: "#009688",
      });
      navigate("/details");
      dispatch(editBalance(saldo));
    }
  };
  return (
    <>
      <Navbar home={false} details={false} />
      <section className="pb-40">
        <div className="px-10 py-10 shadow-md">
          <h1 className="font-bold text-center text-xl">Edit Pemasukan</h1>
        </div>
        <div className="bg-white shadow-2xl mx-10 rounded-lg py-5 px-3">
          <form onSubmit={handleSubmit} className="mt-16">
            <h1 className="font-bold text-center my-3 text-lg">
              Edit Pemasukan Anda
            </h1>
            <div className="flex flex-col gap-y-2 py-2">
              <div className="flex justify-start px-0 gap-x-2">
                <button
                  disabled
                  className="bg-teal-500 text-white px-4 py-1 rounded-lg"
                >
                  Rp
                </button>
                <input
                  type="text"
                  className="px-2 py-3  outline-teal-500  rounded-lg border-2 w-full"
                  placeholder="Contoh: 20000"
                  name="saldo"
                  pattern="\d*"
                  onChange={(e) => setSaldo(e.target.value)}
                  value={saldo}
                />
              </div>
            </div>
            <div className="flex flex-col mx-10 gap-y-2 py-2 mt-4">
              <TrueButton text="Simpan" />
            </div>
          </form>
          <div className="flex flex-col mx-10 gap-y-2 py-2">
            <FalseButton text="Batal" to="/details" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EditBalanceForm;
