import Navbar from "../components/Navbar";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
    const navigate = useNavigate()
    const balance = useSelector((state)=> state.balance)
    const currentBalance = parseInt(balance).toLocaleString("id")
    const handleClick = ()=> {
        navigate("/transaction")
    }
    const handleClickEditButton=()=> {
      navigate('/edit-balance')
    }
  return (
    <>
      <Navbar home={false} details={true} />
      <section>
        <div className="px-10 py-3 shadow-md ">
          <h1 className=" font-bold text-xl text-center my-1">Details</h1>
          <div className=" flex justify-between py-1 px-2 gap-x-6">
            <div className="w-1/2 text-center border-b-2 border-teal-500 py-1 cursor-pointer">
              <h1 className="font-bold text-xl ">Saldo</h1>
            </div>
            <div className="w-1/2 text-center py-1 cursor-pointer" onClick={handleClick}>
              <h1 className="font-bold text-xl">Pengeluaran</h1>
            </div>
          </div>
        </div>
        <div className="px-10 my-5">
            {/* card */}
            <div className="flex justify-between py-4 px-4 bg-teal-500 text-white rounded-lg shadow-lg ">
                <div className="w-3/4 flex flex-col gap-y-1">
                    <h1 className="text-xl font-bold">Cash</h1>
                    <h1 className="text-lg font-medium">Rp{currentBalance}</h1>
                </div>
                <div className="w-1/4 flex justify-center items-center rounded-full hover:bg-teal-600" onClick={handleClickEditButton}>
                    <EditIcon sx={{fontSize: 32}}/>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Details;
