import According from "../According/According";
import CarouselImg from "../Carousel/CarouselImg";
import Path from "./Path";

const Home = () => {
  return (
    <div>
      {/* path title  */}
      <Path />
      {/* secound Title  */}
      <div className="mt-14 w-11/12 md:w-8/12 mx-auto lg:ml-[75px]">
        <div className="text-3xl lg:flex gap-1 font-bold text-center text-linear text-blue-700">
          Relations and Functions <h1 className="">( Mathematics )</h1>{" "}
        </div>
      </div>
      {/* carousel Images slider */}
      <div className="w-full lg:ml-44">
        <CarouselImg />
      </div>
      {/* FAQ COMPONENTS */}
      <h1 className="text-4xl font-bold text-blue-900 text-center lg:text-start lg:mx-16 mt-8 font-[Inter] ">
        FAQ
      </h1>
      <According />
      <According />
      <According />
    </div>
  );
};

export default Home;
