import { useEffect, useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Carousel = ({ children: slides, autoSlide= false, autoSlideInterval = 300 }) => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => curr === 0 ? slides.length -1 : curr -1)
    const next = () => setCurr(curr => curr ===  slides.length -1  ? 0 : curr +1)
    useEffect(() => {
        if(!autoSlide) return 
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])
    console.log(slides);
  return (
    <div className="overflow-hidden relative mt-10">
      <div className="border-4 border-slate-800 rounded-3xl">
        <div className="flex w-full h-auto" style={{transform: `translateX(${-curr * 100}%)`}}>{slides}</div>
      </div>
      <div className="flex items-center justify-center gap-10 mt-5">
        <button onClick={prev}>
          <MdOutlineChevronLeft className="text-4xl rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-900" />
        </button>
        <button onClick={next}>
          <MdOutlineChevronRight className="text-4xl rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-900" />
        </button>
      </div>
      <div className="absolute bottom-20 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
            {slides.map((number, i) => <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}>/{slides.length}</div> )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
