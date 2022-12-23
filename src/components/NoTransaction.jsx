import icon from "../assets/notransaction.svg"
const NoTransaction = ()=> {
    return (
        <>
        <section className="py-16 flex flex-col justify-center">
            <img src={icon} alt="No Transaction" className="w-1/2 mx-auto" />
            <div>
                <h1 className="font-medium text-center text-xl text-slate-800 mt-3">Belum ada transaksi, nih!</h1>
            </div>
        </section>
        </>
    )
}

export default NoTransaction