import React, { useEffect, useState } from "react";
import { developerText } from "../../data/developer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Developer = ({ videos, title, id }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const developerClass = loading ? "isLoading" : "isLoaded";
  return (
    <section id={id} className={developerClass}>
      <h2>{title}</h2>
      <div className="developer_inner overflow">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { spaceBetween: 3, slidesPerView: 4 },
            768: { spaceBetween: 6, slidesPerView: 5 },
            1024: { spaceBetween: 8, slidesPerView: 6 },
            1240: { spaceBetween: 20, slidesPerView: 8 },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {videos.map((developer, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="developer" key={key}>
                  <div className="developer_img play_icon">
                    <Link to={`/channel/${developer.channelId}`}>
                      <img src={developer.img} alt={developer.name} />
                    </Link>
                  </div>
                  <div className="developer_info">
                    <Link to={`/channel/${developer.channelId}`}>
                      {developer.name}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
