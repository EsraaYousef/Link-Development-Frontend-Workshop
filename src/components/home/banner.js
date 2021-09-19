import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import BannerImage1 from "../../images/banner/banner-01.png";
import BannerImage2 from "../../images/banner/banner-02.png";
import BannerImage3 from "../../images/banner/banner-03.png";

SwiperCore.use([Navigation, Pagination, EffectFade, A11y]);

class FullBanner extends React.Component {
  render() {
    const slidesItems = [
      { id: 1, image: BannerImage1 },
      { id: 2, image: BannerImage2 },
      { id: 3, image: BannerImage3 },
    ];
    return (
      <div className="home-slider-parallax">
        {slidesItems && (
          <Swiper
            effect="fade"
            spaceBetween={20}
            speed={600}
            navigation={true}
            pagination={true}
            className="mySwiper"
          >
            {slidesItems.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.image} alt={"home-Slide-" + index} />
                <div className="parallax-text">
                  <h1>Al Foundation</h1>
                  <p>
                    is focused on inspiring the next generation of kids
                    Healthcare professionals.
                  </p>
                  <Link to="/" className="btn btn-main">
                    Donate Now
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    );
  }
}

export default FullBanner;
