
import React, { useState } from 'react';

const Carausal = () => {
  const [activeVideo, setActiveVideo] = useState("/videos/v1.mp4");

  const handleVideoChange = (src) => {
    setActiveVideo(src);
  };

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Wellcome to jaiPurTourPoint</h3>
          <p>discover new places with us, adventure awaits</p>
         
        </div>

        <div className="controls">
          {["/videos/v1.mp4",
           "/videos/v2.mp4", 
           "/videos/v3.mp4", 
           "/videos/v4.mp4",
            "/videos/v5.mp4"].map((src, index) => (
            <span
              key={index}
              className={`vid-btn ${activeVideo === src ? 'active' : ''}`}
              onClick={() => handleVideoChange(src)}
              data-src={src}
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video src={activeVideo} id="video-slider"  autoPlay muted />
        </div>
      </section>

      <div className="text-center  " style={{margin:'20px', textAlign:'center'}}>
  <h2 className="text-2xl md:text-3xl m-5 text-gray-800 font-serif" style={{fontSize:"3.4rem",fontFamily:'serif' , fontWeight:'bold', marginTop:''}}>
    Explore India with Trusted Travel Partners
  </h2>

  <p className="font-bold text-2xl text-gray-900 mt-6" style={{fontSize:"2.4rem"}}>
    *Customized Tour Plans | *Professional Drivers | *Pan-India Taxi Services | *Affordable Pricing
  </p>

  <p className="text-gray-700 text-xl mt-4 font-bold   " style={{marginTop:'5px', fontSize:"1.6rem"}}>
  Discover the beauty and diversity of India with our trusted and experienced travel solutions. Whether you’re planning a short getaway or a long vacation, we ensure safety, comfort, and memorable experiences at every step of your journey. From the majestic Himalayan peaks in the north to the serene beaches in the south, our curated travel packages cover every corner of the country. With 24/7 customer support, expert local guides,
   and a commitment to excellence, we strive to make every trip not just a journey—but a cherished memory for a lifetime.
  </p>
</div>

    </>
  );
};

export default Carausal;