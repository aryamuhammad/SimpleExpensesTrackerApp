const TrueButton = ({ text }) => {
  return (
    <>
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full w-3/4 mx-auto duration-300">
        {text}
      </button>
    </>
  );
};

export default TrueButton;
