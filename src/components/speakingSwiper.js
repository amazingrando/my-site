import { Swiper, SwiperSlide } from 'swiper/react';
import SpeakingVideo from './speakingVideo';
import 'swiper/css';

const SpeakingSwiper = ({ slides }) => (
  <div className="w-screen -mx-8 md:-mx-24">
    <Swiper
      keyboard="true"
      slidesPerView={1.125}
      spaceBetween={10}
      slidesOffsetBefore={32}
      breakpoints={{
        400: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30,
          slidesOffsetBefore: 96,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 40,
          slidesOffsetBefore: 96,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.items.map((item) => (
        <SwiperSlide key={item.id}>
          <SpeakingVideo
            img={
              item.snippet.thumbnails.maxres
                ? item.snippet.thumbnails.maxres.url
                : item.snippet.thumbnails.high.url
            }
            title={item.snippet.title}
            videoId={item.snippet.resourceId.videoId}
            organization={item.snippet.videoOwnerChannelTitle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default SpeakingSwiper;
