import React from 'react'

const Gallery = () => {
  const gallerydata = [
          {
               id: 1,
               img: "/images/jaipur/img2.jpg",
               title: "Jaipur",
               description: "Jaipur, known as the 'Pink City,' is the capital of Rajasthan and is famous for its grand palaces, forts, and vibrant markets. "
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
               description: "only dedicated Brahma Temple. The town hosts the grand Pushkar Camel Fair, one of the largest livestock fairs in the world."
          },
          {
               id: 4,
               img: "/images/Chittorgarh/img2.jpg",
               title: "Chittorgarh",
               description: "the largest fort in India, symbolizing Rajput bravery and sacrifice. Built in the 7th century by the Maurya dynasty."
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
               id: 10,
               img: "/images/Gulab_bagh/img1.jpg",
               title: "Gulab Garh",
               description: "Gulab Garh is a historical and cultural site known for its heritage significance and architectural beauty. It is often associated with royal Rajasthani culture and serves as a gateway to understanding the traditions of the region."
          },
          {
               id: 9,
               img: "/images/Bikaner/img1.jpg",
               title: "Bikaner ",
               description: "Bikaner, founded in 1488 by Rao Bika, is famous for its grand Junagarh Fort, ornate palaces, and the Karni Mata Temple, home to thousands of rats.The city is known for its camel breeding farms, delicious Bikaneri Bhujia, and the annual Camel Festival"
          },
          {
               id: 11,
               img: "/images/Chulgiri/img1.jpg",
               title: "Chokhi Dhani ",
               description: "Chokhi Dhani is a well-known ethnic village resort in Jaipur, Rajasthan, founded in 1990 by Gul Vaswani and Subhash Vaswani. It was created to preserve and promote Rajasthani heritage through folk dances, puppet shows"
          },
          {
               id: 12,
               img: "/images/peena_meena/img1.jpg",
               title: "Panna Meena Ka Kund ",
               description: "Panna Meena Ka Kund is a historic stepwell near Amber Fort, built in the 16th century. This beautifully symmetrical water reservoir was used for water conservation and social gatherings."
          },
          {
               id: 13,
               img: "/images/Amber_Fort/img1.jpg",
               title: "Amber Fort ",
               description: "Amber Fort, built in 1592 by Raja Man Singh I, is one of Rajasthan’s most stunning forts."
          },
          {
               id: 14,
               img: "/images/Jaigarh_Fort/img2.jpg",
               title: "Jaigarh Fort ",
               description: "Jaigarh Fort, built by Maharaja Jai Singh II in 1726, is known as the 'Victory Fort' and is home to the world’s largest cannon on wheels, Jaivana."
          },
          {
               id: 15,
               img: "/images/hawa_mehel/img1.jpg",
               title: "hawa mehel ",
               description: "Hawa Mahal, the 'Palace of Winds,' was built in 1799 by Maharaja Sawai Pratap Singh."
          },
          {
               id: 16,
               img: "/images/Nahargarh_Fort/img1.jpg",
          "title": "Nahargarh_Fort",
               title: " ",
               description: "Nahargarh Fort, built in 1734 by Maharaja Sawai Jai Singh II, stands on the Aravalli hills and offers a stunning panoramic view of Jaipur."
          }
         
     ]
  return (
    <>
      <section className="gallery bg-gray-100" id="gallery">

      <div className='bg-white-100 p-4 mb-4 text-center'>

<h2 className="text-4xl font-bold mb-5 text-blue-900  border-yellow-400 mb-6 " style={{fontSize:"3rem",padding:"10px"}}>
Gallary
</h2>
<p className='text-xl font-bold mb-5 text-gray-900  border-yellow-400 mb-6 '>Dive into the beauty of Jaipur with our stunning travel snapshots! From majestic forts to vibrant bazaars, experience the essence of the Pink City.

🌸 Scroll, Explore & Get Inspired! 🏰📷🚗</p>

</div>

<div className="box-container " >
  {gallerydata.map((data)=>{ 
     return(
          <div className="box" key={data.id} style={{borderRadius:"25px"}}>
          <img src={data.img} className='' alt=""/>
          <div className="content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            
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
