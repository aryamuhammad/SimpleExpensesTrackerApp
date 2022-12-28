
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import fnb from "../assets/fnb.svg";
import payment from "../assets/payment.svg";
import transport from "../assets/transport.svg";
import NoTransaction from "../components/NoTransaction";
const DetailsTransaction = () => {
  const transaction = useSelector((state)=> state.transaction)
    const navigate = useNavigate()
    const handleClick = ()=> {
        navigate('/details')
    }

  return (
    <>
      <Navbar home={false} details={true} />
      <section>
        <div className="px-10 py-3 shadow-md ">
          <h1 className=" font-bold text-xl text-center my-1">Details</h1>
          <div className=" flex justify-between py-1 px-2 gap-x-6">
            <div className="w-1/2 text-center py-1 cursor-pointer" onClick={handleClick}>
              <h1 className="font-bold text-xl">Saldo</h1>
            </div>
            <div className="w-1/2 text-center py-1 border-b-2 border-teal-500 cursor-pointer">
              <h1 className="font-bold text-xl">Pengeluaran</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 px-10 mt-4">
          {transaction.length === 0? <NoTransaction/> :transaction.map((item) => {
            const amount = parseInt(item.amount).toLocaleString("id")
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
      </section>
    </>
  );
};

export default DetailsTransaction;
