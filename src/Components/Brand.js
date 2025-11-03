import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Brand = () => {
  return (
    <section className="brand-container">
      <Swiper
        modules={[Autoplay]} // Add Autoplay module
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500, // Auto-slide delay in milliseconds (2.5 seconds)
          disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="brand-slider"
        style={{width:"80%"}}
      >
        <SwiperSlide>
          <img src="https://png.pngtree.com/png-vector/20220826/ourmid/pngtree-rajasthani-couple-cute-indian-traditional-of-rajasthan-in-dress-png-image_6125027.png" alt="Brand 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://png.pngtree.com/png-clipart/20230801/ourmid/pngtree-rajasthani-men-with-turban-and-mustache-vector-face-illustration-png-image_9117425.png" alt="Brand 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/rajasthani-illustration-download-in-svg-png-gif-file-formats--red-logo-happy-man-rajasthan-different-culture-pack-people-illustrations-2252417.png?f=webp" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://64.media.tumblr.com/37963e90c036a93a15d93ec28fc441aa/cd4f119e45a57c73-19/s400x600/6c4501f2e7744d312eba9efc4af3a6eb39b13c04.gif" alt="Brand 4" style={{borderRadius:"50px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfStgOAp0WQPG-el_UXq1ehxQK_OIThQkwQ&s" alt="Brand 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgs.search.brave.com/lmbPnUSfvFU837u2ETV7MzQVGgCxa0GBz-asXBWtKLI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/OTE3NzE2L3Bob3Rv/L3RyYWRpdGlvbmFs/LWZvbGstZGFuY2Vy/cy1pbi1pbmRpYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VllJUjZtUGh3ODVy/TThBbExGUjdmUkth/dnZGeEZOa0tuVmxq/cm82YXgzND0" alt="Brand 6" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Brand;