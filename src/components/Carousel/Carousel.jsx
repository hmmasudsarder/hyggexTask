import { useEffect, useState } from "react";
import { IoVolumeMediumSharp } from "react-icons/io5";
import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineLightbulb,
  MdZoomInMap,
} from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { SlFrame } from "react-icons/sl";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 300,
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);
  console.log(slides);
  return (
    <div className="overflow-hidden relative mt-4">
      <div className="rounded-3xl">
        <div
          className="flex w-full rounded-3xl"
          style={{ transform: `translateX(${-curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      <div className="flex items-center justify-center z-10 gap-16 mt-4">
        <div onClick={prev} className="cursor-pointer">
          <MdOutlineChevronLeft
            className="text-4xl rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-900"
            onClick={prev}
          />
        </div>
        <div onClick={next} className="cursor-pointer">
          <MdOutlineChevronRight
            className="text-4xl rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-900"
            onClick={next}
          />
        </div>
      </div>
      <div className="absolute bottom-1 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
          <div className="text-blue-700 text-xl font-bold">
            0{curr + 1}/{slides.length}
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 right-0 left-0 mx-10">
        <div className="flex items-center justify-between gap-3">
          <div className="text-blue-700 text-2xl font-extrabold">
            <RiRestartLine className="text-blod" />
          </div>
          <div className="text-blue-700 text-xl font-extrabold">
            <SlFrame className="font-bold" />
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-0 left-0 mx-8">
        <div className="flex items-center justify-between gap-3">
          <div className="text-white text-2xl font-extrabold">
            <MdOutlineLightbulb />
          </div>
          <div className="text-white text-2xl font-extrabold">
            <IoVolumeMediumSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
