
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Banner.css";
import { useRef } from "react";



const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        <h3>Join us for a summer camp where food and creativity collide, resulting in delicious memories.</h3>
            <img src="https://static.vecteezy.com/system/resources/previews/014/830/549/original/cute-chef-kids-making-cake-vector.jpg" alt="" />
         
        </SwiperSlide>
        <SwiperSlide> 
          <h3>Get ready to whip up delicious dishes and explore the world of flavors at Curlinary Camp.</h3>
           <img src="https://media.istockphoto.com/id/1366596454/vector/kids-cooking-little-chef-characters-joint-food-preparation-process-boys-and-girls-prepare.jpg?s=170667a&w=0&k=20&c=ARLv7d1dpg1MAMiEgNX0yc0fwPzP35y4oJwanrdT6yA=" alt="" /></SwiperSlide>
        <SwiperSlide>  
        <h3>Calling all aspiring chefs! Experience the magic of culinary arts at our summer camp</h3>
          <img src="https://st2.depositphotos.com/5425740/11034/v/950/depositphotos_110342308-stock-illustration-cute-kids-cooking-cookies.jpg" alt="" /></SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  );
};

export default Banner;
