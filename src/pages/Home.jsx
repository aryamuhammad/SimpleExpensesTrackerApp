import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import fnb from "../assets/fnb.svg";
import payment from "../assets/payment.svg";
import transport from "../assets/transport.svg";
import NoTransaction from "../components/NoTransaction";

const Home = () => {
  const balanceState = useSelector((state) => state.balance);
  const currentBalance = balanceState.balance.toLocaleString("id");
  const transaction = useSelector((state) => state.transaction);
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
        {transaction.length === 0? <NoTransaction/> : (<>
        <div className="px-10 pb-36">
          <h1 className="font-bold text-slate-900 text-xl my-5">
            Catatan Pengeluaran
          </h1>
          <div className="flex flex-col gap-y-5">
            {transaction.map((item) => {
              localStorage.setItem("data", item)
                const amount = item.amount.toLocaleString("id")
                let icon = ""
                let category=""
                 function getIcon() {
                    if (item.category == "payment") {
                        icon = payment
                    }else if (item.category == "fnb") {
                        icon = fnb
                    }else if (item.category == "transport") {
                        icon = transport
                    }
                }
                function getCategory(){
                   if (item.category == "payment") {
                        category = "Pembayaran"
                    }else if (item.category == "fnb") {
                        category = "Makanan dan Minuman"
                    }else if (item.category == "transport") {
                        category = "Transportasi"
                    }
                }
                getIcon()
                getCategory()
              return (
                <div key={item.id} className="bg-white shadow-lg flex justify-between  items-center gap-x-3 rounded-lg py-3 px-4">
                  <img src={icon} alt="" className="w-1/4 p-0 m-0 flex-none" />
                  <div className="flex-auto">
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="text-xs font-extralight italic">
                        {category}
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
        </>)}
        
      </section>
    </>
  );
};

export default Home;
