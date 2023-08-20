import React from "react";
import "./testimonials.css";
import clip1 from "../../assets/images/Testimonials/clip.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "hello" },
  { name: "hello" },
  { name: "hello" },
  { name: "hello" },
  { name: "hello" },
  { name: "hello" },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div class="container testimonials__container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map(() => {
            return (
              <SwiperSlide
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <div className="testimonial__card">
                  <div className="testimonial__photo">
                    <img src={clip1} alt="" />
                  </div>
                  <h2>Garvit Rajput</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda soluta dolorem sequi ex ducimus quas doloribus
                    consequuntur{" "}
                    <span className="hidden">
                      ipsa nam quam, rerum quisquam provident explicabo laborum
                      architecto? Corporis animi blanditiis necessitatibus?
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
