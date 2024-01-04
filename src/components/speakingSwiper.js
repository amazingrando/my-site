import { Swiper, SwiperSlide } from 'swiper/react';
import SpeakingVideo from './speakingVideo';
import 'swiper/css';

const SpeakingSwiper = ({ slides }) => (
  <div>
    <Swiper
      spaceBetween={50}
      slidesPerView="auto"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.items.map((item) => (
        <SwiperSlide key={item.id} className="max-w-[30vw]">
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
