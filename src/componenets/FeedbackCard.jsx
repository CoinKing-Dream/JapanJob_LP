const BenefitCard = ({ item, index }) => {
  return (
    <>
      <div className="divide-y-2 divide-dashed  divide-blue-200 flex flex-col justify-center items-center shadow-lg shadow-slate-500/100 w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] rounded-lg">
        <div className="relative hover:bg-opacity-10 backdrop-blur-md flex w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] z-100 items-center justify-center text-center duration-500 bg-white text-[#598234] hover:opacity-80 hover:cursor-pointer hover:bg-gray-600 hover:text-lime-800 duration-700">
          <div className="w-[300px] font-black text-3xl z-10">{item.contents}</div>
          <div className="absolute font-bold text-[12rem] text-[--waterfall-color] z-1 opacity-25">
            {"0" + (index + 1)}
          </div>
        </div>
        <div className="w-[100%] text-[#68829E] flex justify-center items-center text-2xl font-bold h-[80px] bg-white rounded-b-lg">
          {item.title}
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
