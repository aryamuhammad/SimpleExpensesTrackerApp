import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import fnb from "../assets/fnb.svg";
import payment from "../assets/payment.svg";
import transport from "../assets/transport.svg";

const Home = () => {
  const balanceState = useSelector((state) => state.balance);
  const currentBalance = balanceState.balance.toLocaleString("id");
  const transaction = useSelector((state) => state.transaction.data);
  return (
    <>
      <Navbar home={true} details={false} />
      <section className="">
        <div className="bg-gradient-to-br from-[#20BF55] to-[#01BAEF] px-10 pt-10 pb-10">
          <h1 className="font-bold text-slate-50 py-5 text-xl">
            Hai, Selamat Datang!
          </h1>
          <div className="bg-white flex flex-col gap-y-5 px-5 py-5 rounded-lg drop-shadow-lg">
            <div className="flex justify-between">
              <h1 className="text-slate-900 font-bold">Saldo</h1>
              <p className="text-slate-900 font-bold">Rp{currentBalance}</p>
            </div>
            <div className="flex justify-between ">
              <h1 className="text-slate-900 font-bold">Pengeluaran</h1>
              <p className="text-slate-900 font-bold">Rp2.000.000</p>
            </div>
          </div>
        </div>
        {/* Transaksi */}
        <div className="px-10">
          <h1 className="font-bold text-slate-900 text-xl mt-5">
            Catatan Pengeluaran
          </h1>
          <div className="flex flex-col gap-y-5">
            {transaction.map((item) => {
                const amount = item.amount.toLocaleString("id")
                let icon = ""
                 function getIcon() {
                    if (item.category == "Pembayaran") {
                        icon = payment
                    }else if (item.category == "Makanan dan Minuman") {
                        icon = fnb
                    }else if (item.category == "Transportasi") {
                        icon = transport
                    }
                }
                getIcon()
              return (
                <div key={item.id} className="bg-white shadow-lg flex justify-between  items-center gap-x-3 rounded-lg py-3 px-4">
                  <img src={icon} alt="" className="w-1/4 p-0 m-0 flex-none" />
                  <div className="flex-auto">
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="text-xs font-extralight italic">
                        {item.category}
                    </p>
                  </div>
                  <div className="text-rose-700 font-bold flex-auto">
                    <h1>Rp{amount}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;