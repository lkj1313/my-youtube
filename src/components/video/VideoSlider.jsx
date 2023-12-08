import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const VideoSlider = ({ id, title, videos }) => {
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("hi");
      setLoding(false);
    }, 500);
  }, []);
  const videoClass = loading ? "isLoding" : "isLoaded";
  return (
    <section id={id} className={videoClass}>
      {console.log("hi2")}
      <h2>{title}</h2>
      <div className="video_slider">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper-${id}`}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {videos.map((video, key) => (
            <SwiperSlide key={key}>
              <div className="video" key={key}>
                <div className="video_thumb play_icon">
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSlider;
