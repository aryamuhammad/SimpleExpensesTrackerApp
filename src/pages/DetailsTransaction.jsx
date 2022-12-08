
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DetailsTransaction = () => {
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
            <div className="w-1/2 text-center py-1" onClick={handleClick}>
              <h1 className="font-bold text-xl">Saldo</h1>
            </div>
            <div className="w-1/2 text-center py-1 border-b-2 border-teal-500">
              <h1 className="font-bold text-xl">Pengeluaran</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsTransaction;
