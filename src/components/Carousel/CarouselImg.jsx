import Carousel from "./Carousel";
import demoVideo from "../../assets/slie.mp4";

const CarouselImg = () => {
  const slides = [
    "https://i.ibb.co/yPNNMq8/9de07e2081cfd5ed95906a01bdd4d6fc.png",
    "https://i.ibb.co/0B4bcPM/20220525124948-bmw-jahre-front-with-gold-wheels.jpg",
    "https://i.ibb.co/yPNNMq8/9de07e2081cfd5ed95906a01bdd4d6fc.png",
    "https://i.ibb.co/0B4bcPM/20220525124948-bmw-jahre-front-with-gold-wheels.jpg",
  ];
  return (
    <div>
      <div className="mx-auto w-6/12">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {[...slides.map((s, inx) => (
            <img key={inx} src={s} />
          )), 
          <video src={demoVideo} autoPlay muted loop />
          ]}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselImg;
