import Carousel from "./Carousel";
import demoVideo from "../../assets/slie.mp4";

const CarouselImg = () => {
  const slides = [
    "https://i.ibb.co/9hH9SjT/bmw-m8-competition-individual-rosso-corsa-stage-teaser-02.png",
    "https://i.ibb.co/0B4bcPM/20220525124948-bmw-jahre-front-with-gold-wheels.jpg",
    "https://i.ibb.co/9hH9SjT/bmw-m8-competition-individual-rosso-corsa-stage-teaser-02.png",
    "https://i.ibb.co/0B4bcPM/20220525124948-bmw-jahre-front-with-gold-wheels.jpg",
  ];
  return (
    <div>
      <div className="w-7/12 mx-auto">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {[...slides.map((s, inx) => (
            <img className="rounded-3xl w-2/2" key={inx} src={s} />
          )), 
          <video className="rounded-3xl" src={demoVideo} autoPlay />
          ]}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImg;
