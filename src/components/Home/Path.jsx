import { FaChevronRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";

const Path = () => {
  return (
    <div>
      <div className="flex items-center gap-1 mt-28 w-1/2 mx-auto lg:ml-[75px]">
        <GoHome className="text-2xl text-gray-600" />
        <FaChevronRight className="mt-1" />
        <p className="text-gray-400">Flashcard</p>
        <FaChevronRight className="mt-1" />
        <p className="text-gray-400">Mathematics</p>
        <FaChevronRight className="mt-1" />
        <p className="font-semibold">Relation and Function</p>
      </div>
    </div>
  );
};

export default Path;
