import React from 'react'

const Gallery = () => {
     const gallerydata = [
          {
               id: 1,
               img: "/images/jaipur/img2.jpg",
               title: "Jaipur",
               description: "Jaipur, known as the 'Pink City,' is the capital of Rajasthan and is famous for its grand palaces, forts, and vibrant markets."
          },
          {
               id: 2,
               img: "/images/Ajmer/img2.jpg",
               title: "Ajmer",
               description: "Ajmer is a historic city best known for the Ajmer Sharif Dargah, the tomb of Sufi saint Khwaja Moinuddin Chishti."
          },
          {
               id: 3,
               img: "/images/Pushkar/img1.jpg",
               title: "Pushkar",
               description: "Only dedicated Brahma Temple. The town hosts the grand Pushkar Camel Fair, one of the largest livestock fairs in the world."
          },
          {
               id: 4,
               img: "/images/Chittorgarh/img2.jpg",
               title: "Chittorgarh",
               description: "The largest fort in India, symbolizing Rajput bravery and sacrifice. Built in the 7th century by the Maurya dynasty."
          },
          {
               id: 5,
               img: "/images/Udaipur/img1.jpg",
               title: "Udaipur",
               description: "Udaipur, also called the 'City of Lakes,' is known for its breathtaking lakes, royal palaces."
          },
          {
               id: 6,
               img: "/images/mount_abu/img2.jpg",
               title: "Mount Abu",
               description: "Mount Abu is the only hill station in Rajasthan, offering a refreshing escape from the desert heat with its lush greenery and cool climate."
          },
          {
               id: 7,
               img: "/images/Jaisalmer/img1.jpg",
               title: "Jaisalmer",
               description: "Jaisalmer, known as the 'Golden City,' is famous for its yellow sandstone architecture and breathtaking desert scenery."
          },
          {
               id: 8,
               img: "/images/Ranthambore/img2.jpg",
               title: "Ranthambore",
               description: "Ranthambore is one of India's most famous wildlife reserves, known for its population of Bengal tigers."
          },
          {
               id: 9,
               img: "/images/Bikaner/img1.jpg",
               title: "Bikaner",
               description: "Bikaner, founded in 1488 by Rao Bika, is famous for its grand Junagarh Fort, ornate palaces, and the Karni Mata Temple, home to thousands of rats."
          },
          {
               id: 10,
               img: "/images/Gulab_bagh/img1.jpg",
               title: "Gulab Garh",
               description: "Gulab Garh is a historical and cultural site known for its heritage significance and architectural beauty."
          },
          {
               id: 11,
               img: "/images/Chulgiri/img1.jpg",
               title: "Chokhi Dhani",
               description: "Chokhi Dhani is a well-known ethnic village resort in Jaipur, Rajasthan, founded in 1990 by Gul Vaswani and Subhash Vaswani."
          },
          {
               id: 12,
               img: "/images/peena_meena/img1.jpg",
               title: "Panna Meena Ka Kund",
               description: "Panna Meena Ka Kund is a historic stepwell near Amber Fort, built in the 16th century."
          },
          {
               id: 13,
               img: "/images/Amber_Fort/img1.jpg",
               title: "Amber Fort",
               description: "Amber Fort, built in 1592 by Raja Man Singh I, is one of Rajasthan's most stunning forts."
          },
          {
               id: 14,
               img: "/images/Jaigarh_Fort/img2.jpg",
               title: "Jaigarh Fort",
               description: "Jaigarh Fort, built by Maharaja Jai Singh II in 1726, is known as the 'Victory Fort' and is home to the world's largest cannon on wheels, Jaivana."
          },
          {
               id: 15,
               img: "/images/hawa_mehel/img1.jpg",
               title: "Hawa Mahal",
               description: "Hawa Mahal, the 'Palace of Winds,' was built in 1799 by Maharaja Sawai Pratap Singh."
          },
          {
               id: 16,
               img: "/images/Nahargarh_Fort/img1.jpg",
               title: "Nahargarh Fort",
               description: "Nahargarh Fort, built in 1734 by Maharaja Sawai Jai Singh II, stands on the Aravalli hills and offers a stunning panoramic view of Jaipur."
          }
     ]

     return (
          <>
               <section className="gallery" id="gallery">
                    <div className='gallery-header'>
                         <h2 className="gallery-title">
                              Gallery
                         </h2>
                         <p className='gallery-subtitle'>
                              Dive into the beauty of Jaipur with our stunning travel snapshots! From majestic forts to vibrant bazaars, experience the essence of the Pink City.
                              🌸 Scroll, Explore & Get Inspired! 🏰📷🚗
                         </p>
                    </div>

                    <div className="gallery-container">
                         {gallerydata.map((data) => {
                              return (
                                   <div className="gallery-box" key={data.id}>
                                        <div className="gallery-image-container">
                                             <img src={data.img} className='gallery-image' alt={data.title} />
                                        </div>
                                        <div className="gallery-content">
                                             <h3 className="gallery-item-title">{data.title}</h3>
                                             <p className="gallery-item-description">{data.description}</p>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </section>
          </>
     )
}

export default Gallery