import { Link} from "react-router-dom";
import According from "../According/According";
import CarouselImg from "../Carousel/CarouselImg";
import Path from "./Path";
import "./Home.css";
import { useState } from "react";
import Modal from "../Shared/Header/Modal/Modal";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* path title  */}
      <Path />
      {/* secound Title  */}
      <div className="mt-14 w-11/12 md:w-8/12 mx-auto lg:ml-[75px]">
        <div className="text-4xl lg:flex gap-1 font-bold text-center text-linear text-gradient font-[Montserrat]">
          Relations and Functions <h1 className="">( Mathematics )</h1>{" "}
        </div>
      </div>
      {/* carousel Images slider */}
      <div className="w-full lg:ml-44">
        <div className="flex items-center justify-center gap-5 lg:gap-16 mt-4 lg:mt-16">
          <Link className={"border-b-2 text-lg font-semibold"} to={"/"}>
            Study
          </Link>
          <Link className="text-lg font-semibold" onClick={() => setOpen(true)}>
            Quiz
          </Link>
          <Link onClick={() => setOpen(true)} className="text-lg font-semibold">
            Test
          </Link>
          <Link onClick={() => setOpen(true)} className="text-lg font-semibold">
            Game
          </Link>
          <Link onClick={() => setOpen(true)} className="text-lg font-semibold">
            Others
          </Link>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center lg:w-[500px] lg:h-[300px] ml-20 mt-5">
            <FaRegFaceSadCry className="text-9xl mx-auto text-red-400" />
            <div className="mx-auto my-4 w-64 space-y-5">
              <h2 className="text-xl font-black text-gray-800">
                Opps No Content Available!!
              </h2>
              <p className="text-lg text-red-500 font-bold">
                Please See Other Content
              </p>
            </div>
          </div>
        </Modal>
        <CarouselImg />
      </div>

      {/* create Flash and Logo */}

      <div className="flex items-center justify-between px-16 mt-14 mb-24">
        <div className="">
          <img
            src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
            alt=""
          />
        </div>
        <div className="lg:-mr-64">
          <div className="flex items-center gap-2 justify-center cursor-pointer" onClick={() => setOpen(true)}>
            <FiPlus className="lg:text-4xl rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-900" />
            <h1  className="lg:text-3xl font-bold rounded-full text-gradient">
              Create Flashcard
            </h1>
          </div>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="text-center lg:w-[500px] lg:h-[300px] ml-20 mt-5">
              <FaRegFaceSadCry className="text-9xl mx-auto text-red-400" />
              <div className="mx-auto my-4 w-64 space-y-5">
                <h2 className="text-xl font-extrabold text-blue-800">
                  Opps Your Not Create Flashcard 
                </h2>
                <p className="text-lg text-red-500 font-bold">
                  Is Working on Developer under So Sorry For That!!
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* FAQ COMPONENTS */}
      <h1 className="text-4xl font-bold text-gradient text-center lg:text-start lg:mx-16 mt-8 font-[Inter] ">
        FAQ
      </h1>
      <div className="mb-20">
        <According />
        <According />
        <According />
      </div>
    </div>
  );
};

export default Home;
