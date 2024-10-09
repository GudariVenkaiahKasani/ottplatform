import mockData from "../utilities/data/data1";

const Cards = () => {
  return mockData.moreReasonsToJoin.map((card) => (
    <div className=" bg-gradient-to-br from-green-200 via-black to-purple-400 h-64 mr-6 w-1/4 rounded-2xl">
      <div className="text-white text-extrabold text-2zxl py-6 pl-2 h-[40%]">
        {card.title}
      </div>
      <div className=" text-gray-200 text-bold text-lg py-6 pl-2 pr-8 h-[60%]">
        {card.discription}
      </div>
    </div>
  ));
};
export default Cards;
