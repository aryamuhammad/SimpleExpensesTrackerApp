import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddTransactionForm from "./pages/AddTransactionForm"
import Details from "./pages/Details"
import DetailsTransaction from "./pages/DetailsTransaction"
import Home from "./pages/Home"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/transaction" element={<DetailsTransaction/>}/>
        <Route path="/add-transaction" element={<AddTransactionForm/>}/>
      </Routes>
    </div>
  )
}

export default App
