import Body1 from "./Body1";
import Cards from "./Crads";
import Accordion from "./Accordion";
import mockData from "../utilities/data/data1";

const Body0 = () => {
  // return <Body1 />;
  return (
    <div className="bg-gradient-to-r from-blue-500 via-black to-purple-500 pb-10 w-full">
      <div className="pl-20 text-exrabold text-white text-2xl pt-4">
        Trending Movies
      </div>
      <Body1 />
      <div className="pl-20 text-white mt-5 text-extrabold text-2xl">
        More reasons to join
      </div>
      <div className="flex flex-row px-20 py-8">
        <Cards />
      </div>
      <div className="sm:px-8 md:px-10 lg:px-20">
        <Accordion data={mockData.questions} openMultiple={true} />
      </div>
    </div>
  );
};
export default Body0;
