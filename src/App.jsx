
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

import AddTransactionForm from "./pages/AddTransactionForm"
import Details from "./pages/Details"
import DetailsTransaction from "./pages/DetailsTransaction"
import EditBalanceForm from "./pages/EditBalanceForm"
import Home from "./pages/Home"

function App() {
  const transaction = useSelector((state) => state.transaction);
  const balance  = useSelector((state)=> state.balance)
  localStorage.setItem("balance", JSON.stringify(balance))
  localStorage.setItem("transaksi", JSON.stringify(transaction))
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/transaction" element={<DetailsTransaction/>}/>
        <Route path="/add-transaction" element={<AddTransactionForm/>}/>
        <Route path="/edit-balance" element={<EditBalanceForm/>}/>
      </Routes>
    </div>
  )
}

export default App
