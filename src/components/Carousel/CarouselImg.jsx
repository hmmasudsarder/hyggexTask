import Carousel from "./Carousel";
// import demoVideo from "../../assets/slie.mp4";

const CarouselImg = () => {
  const slides = [
    "https://live.staticflickr.com/3772/9354438059_a8ac9c9cc7_b.jpg",
    "https://artprojectsforkids.org/wp-content/uploads/2021/08/Draw-a-School.jpg.webp",
    "https://live.staticflickr.com/3772/9354438059_a8ac9c9cc7_b.jpg",
    "https://businessinspection.com.bd/wp-content/uploads/2023/07/Government-Efforts-Boost-Primary-School-Enrollment-and-Reduce-Dropout-Rates-2.jpg",
    "https://live.staticflickr.com/3772/9354438059_a8ac9c9cc7_b.jpg",
    "https://artprojectsforkids.org/wp-content/uploads/2021/08/Draw-a-School.jpg.webp",
    "https://live.staticflickr.com/3772/9354438059_a8ac9c9cc7_b.jpg",
    "https://businessinspection.com.bd/wp-content/uploads/2023/07/Government-Efforts-Boost-Primary-School-Enrollment-and-Reduce-Dropout-Rates-2.jpg",
  ];
  console.log(slides);
  return (
    <div>
      <div className="w-7/12 mx-auto">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {[
            ...slides.map((slide, inx) => (
              <img className="rounded-3xl w-2/2" key={inx} src={slide} />
            )),
            // <video className="rounded-3xl" src={demoVideo} autoPlay />
          ]}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImg;
