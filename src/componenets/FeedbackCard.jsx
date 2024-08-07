const BenefitCard = ({ item, index }) => {
  return (
    <>
      <div className="shadow-lg shadow-cyan-500/100 w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] relative rounded-lg">
        <img
          src={item.img}
          alt={item.img}
          className="object-fill w-[350px] h-[300px] sm:w-[400px] sm:h-[300px] z-10"
        ></img>
        <div className="w-[100%] flex justify-center items-center text-xl font-bold h-[50px] bg-white rounded-b-lg">
          {item.title}
        </div>
        <div className="flex w-[350px] h-[350px] sm:w-[400px] sm:h-[350px] z-100 items-center justify-center opacity-0 absolute top-0 text-center duration-500 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:opacity-80">
          <div className="w-[300px] font-black text-xl">{item.contents}</div>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
