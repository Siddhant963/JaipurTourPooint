import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Review = () => {
  const reviewdata =  [
    {
      id: 1,
      name: 'Aman singh',
      img: "images/aman.jpeg",
      review: 'The service exceeded my expectations from beginning to end. The team was attentive, skilled, and courteous. I’m extremely pleased with the outcome and would gladly suggest their services to friends and colleagues.',
    },
    {
      id: 2,
      name: 'Siddhant dubey',
      img: "images/siddhant.jpeg",
      review: 'The experience was truly amazing from start to end. Everyone was helpful and professional. I am very satisfied with the quality provided. Would definitely recommend to others without hesitation or doubt.',
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      img: "images/pic2.png",
      review: 'A great journey filled with support and care. The service exceeded all expectations, and everything was completed on time. I appreciate the efforts and dedication shown throughout. Excellent work overall, very impressed.',
    },
    {
      id: 4,
      name: 'Sofia Martinez',
      img: "images/pic3.png",
      review: 'Professionalism at its best! The team delivered everything on point. Communication was clear, and assistance was available anytime. I felt valued as a customer. Truly a delightful experience worth every bit of time.',
    },
    {
      id: 5,
      name: 'Liam Johnson',
      img: "images/pic4.png",
      review: 'Wonderful service and prompt delivery. The staff ensured that I was updated regularly. Everything was smooth, efficient, and stress-free. I am happy with the outcome. Highly recommend them for great results.',
    }
  
    
  ];

  return (
    <>
      <section className="review" id="review">
      <div className='bg-white-100 p-4 mb-4'>

<h2 className="text-4xl font-bold mb-5 text-blue-900  border-yellow-400 mb-6 " style={{fontSize:"3rem",padding:"10px"}}>
Reviews
</h2>
</div>

        <Swiper
          modules={[Autoplay]} // Add Autoplay module here
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500, // Auto-slide delay in milliseconds (2.5 seconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="review-slider"
        >
          {reviewdata.map((reviews) => (
            <SwiperSlide key={reviews.id}>
              <div className="box " style={{borderRadius:"30px"}}>
                <img src={reviews.img} alt="" />
                <h3>{reviews.name}</h3>
                <div style={{fontSize:"2rem"}}>
                       <p>{reviews.review}</p>
                </div>
           
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Review;