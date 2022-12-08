// import {HomeIcon, NotesIcon} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home'
import NotesIcon from '@mui/icons-material/Notes'
import AddIcon from '@mui/icons-material/Add'
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({home, details}) => {
  const navigate = useNavigate()
  const handleClickDetails = ()=> {
    navigate('/details')
  }
    const handleClickHome = ()=> {
    navigate('/')
  }
  return (
    <nav className=" bg-white shadow-shadowTop fixed bottom-0 w-full py-2 px-5 pb-6">
      <ul className="flex justify-center gap-20">
        <li className="flex flex-col items-center justify-center">
          <HomeIcon  className={`${home ? "text-blue-800": "text-slate-800"}`} onClick={handleClickHome}/>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex flex-col items-center justify-center">
            <AddIcon sx={{fontSize: 68}} className='text-slate-50 rounded-full absolute bg-teal-500 -top-10 mb-2 hover:bg-teal-700 hover:transition-all hover:duration-300 hover:ease-in'/>
          <Link className='mt-6'>Catat</Link>
        </li>
        <li className="flex flex-col items-center justify-center">
            <NotesIcon className={`${details ? "text-blue-800": "text-slate-800"}`} onClick={handleClickDetails}  />
          <Link to={"/details"}>Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
