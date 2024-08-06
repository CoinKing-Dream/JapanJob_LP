const BenefitCard = ({ item, index }) => {
  return (
    <>
      <div className="shadow-lg shadow-cyan-500/100 w-[400px] h-[300px] relative border-2 rounded-lg">
        <img
          src={item.img}
          alt={item.img}
          className="object-fill w-[400px] h-[300px] z-10"
        ></img>
        <div className="flex w-[400px] h-[300px] z-100 items-center justify-center text-red-500 absolute top-0 opacity-40 text-center duration-500 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:opacity-80">
          <div className="w-[300px] font-black text-xl">{item.contents}</div>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
