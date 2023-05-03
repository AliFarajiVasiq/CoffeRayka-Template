import './Landing-Style.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

export default function App() {
  return (
    <div className='container-landing' id='container-landing'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="cover-landing-background">
            <img src="image/Landing/landing-bg-1.jpg" alt="" className="background-landing" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cover-landing-background">
            <img src="image/Landing/landing-bg-2.jpg" alt="" className="background-landing" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cover-landing-background">
            <img src="image/Landing/landing-bg-3.jpg" alt="" className="background-landing" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='father-cover-text-landing'>
        <div className='cover-text-landing'>
          <span className='span-in-landing'>خوش آمدید ...</span>
          <h1 className='title-in-landing'>کافه‌ رستوران ‌رایکا</h1>
          <p className='info-in-landing'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
          <a href="#id" className='btn'>بیشتر بخوانید</a>
        </div>
      </div>
    </div>
  );
}
