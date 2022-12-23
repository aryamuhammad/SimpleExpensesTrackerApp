const FalseButton = ({ text }) => {
  return (
    <>
      <button className="border-2 bg-slate-50 hover:bg-rose-600 hover:text-slate-50 border-rose-600 hover:border-rose-800 text-rose-600 font-bold py-2 px-4 rounded-full w-3/4 mx-auto duration-300">
        {text}
      </button>
    </>
  );
};

export default FalseButton;
