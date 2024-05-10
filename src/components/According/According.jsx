import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const According = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <div className="w-8/12 mx-auto lg:mx-16 mt-8">
        <div className="py-4 border-2 border-[#06286E] rounded-2xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-5"
          >
            <span className="text-lg font-semibold">Can education flashcards be used for all age groups?</span>
            {isOpen ? (
              <span>
                <IoIosArrowUp />
              </span>
            ) : (
              <span>
                <IoIosArrowDown />
              </span>
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600  text-sm${
              isOpen
                ? "grid-rows-[1fr] opacity-100 block"
                : "gird-rows-[0fr] opacity-0 hidden"
            }`}
          >
            <div className="overflow-hidden px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quos aliquam modi sapiente consequatur sequi
              excepturi, minus laudantium ipsa expedita, illum eaque enim earum
              ipsam voluptatum? Blanditiis obcaecati debitis consequatur.
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default According;
