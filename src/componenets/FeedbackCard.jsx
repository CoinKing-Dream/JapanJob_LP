const BenefitCard = ({ item, index }) => {
  return (
    <>
      <div className="divide-y-2 divide-dashed  divide-blue-200 flex flex-col justify-center items-center shadow-lg shadow-cyan-500/100 w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] rounded-lg">
        <div className="hover:bg-opacity-10 backdrop-blur-md flex w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] z-100 items-center justify-center text-center duration-500 bg-white text-lime-600 hover:opacity-80 hover:cursor-pointer hover:bg-gray-600 hover:text-lime-800 duration-700">
          <div className="w-[300px] font-black text-3xl">{item.contents}</div>
        </div>
        <div className="w-[100%] text-blue-400 flex justify-center items-center text-2xl font-bold h-[80px] bg-white rounded-b-lg">
          {item.title}
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
