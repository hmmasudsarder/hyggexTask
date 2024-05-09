import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const According = () => {
  // const datas = [
  //   {
  //     subTitle: "Can education flashcards be used for all age groups?",
  //     description:
  //       'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
  //   },
  //   {
  //     subTitle: "How do education flashcards work?",
  //     description:
  //       "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
  //   },
  //   {
  //     subTitle: "Can education flashcards be used for test preparation?",
  //     description:
  //       "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
  //   },
  // ];
  const [isOpen, setIsOpen] = useState(false);
  // const handleToggle = (idx) =>
  //   setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
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
    // <div>
    //   {/* <div className="rounded-lg mx-4 lg:mx-16 mb-28">
    //     {/* title part  */}
    //     {datas.map((data, idx) => (
    //       <div key={idx}>
    //         <div
    //           onClick={() => handleToggle(idx)}
    //           className={`${
    //             idx === data.length - 1
    //               ? "border-b-2 bg-red-500"
    //               : "border-2 border-[#06286E] rounded-3xl"
    //           } p-4 mt-7  flex items-center gap-2`}
    //         >
    //           <div className="flex-1">
    //             <p className="font-semibold">
    //               {data?.subTitle} {/*give color based on condition */}
    //             </p>
    //           </div>
    //           <div
    //             className={`duration-300 ease-in-out ${
    //               isOpen === idx ? "rotate-180 " : ""
    //             }`}
    //           >
    //             <svg
    //               width={25}
    //               className="rotate-90"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <g strokeWidth="0"></g>
    //               <g
    //                 id="SVGRepo_tracerCarrier"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               ></g>
    //               <g id="SVGRepo_iconCarrier">
    //                 <path
    //                   d="M10 7L15 12L10 17"
    //                   stroke="#a8a8a8"
    //                   strokeWidth="1.5"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 ></path>
    //               </g>
    //             </svg>
    //           </div>
    //         </div>
    //         <div
    //           className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
    //             isOpen === idx
    //               ? "grid-rows-[1fr] opacity-100 border- border-[#06286E] rounded-3xl"
    //               : "grid-rows-[0fr] opacity-0"
    //           }`}
    //         >
    //           <div className="overflow-hidden">
    //             <div className={`p-6`}>{data?.description}</div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div> */}
    // </div>
  );
};

export default According;
