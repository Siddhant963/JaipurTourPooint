import React from 'react';

const Pakages = () => {
  const pakedata = [
    {
      id: 1,
      img: "/images/Pushkar/img3.jpg",
      name: "5 Days Tour Package",
      desc: "Jaipur, Ajmer, Pushkar, Chittorgarh, Udaipur, Mount Abu",
     
    },
    {
      id: 2,
      img: "/images/jodhpur/img3.jpg",
      name: "5 Days Tour Package II",
      desc: "Ajmer, Pushkar, Jodhpur, Jaisalmer, Udaipur, Jaipur",
     
    },
    {
      id: 3,
      img: "/images/Chittorgarh/img4.jpg",
      name: "7 Days Tour Package",
      desc: "Ajmer, Pushkar, Jodhpur, Jaisalmer, Udaipur, Mount Abu, Chittorgarh, Jaipur",
     
    },
    {
      id: 4,
      img: "/images/Ranthambore/img2.jpg",
      name: "9 Days Tour Package",
      desc: "Jaipur, Bikaner, Jodhpur, Jaisalmer, Udaipur, Mount Abu, Chittorgarh, Ajmer, Pushkar, Ranthambore",
     
    },
    {
      id: 5,
      img: "/images/hawa_mehel/img1.jpg",
      name: "2 Days Tour Jaipur I (Special)",
      desc: "Jaipur, Birla Mandir, Albert Hall Museum, Hawa Mahal, Jantar Mantar, City Palace, Khazana Mahal, Jal Mahal",
    },
    {
      id: 6,
      img: "/images/Nahargarh_Fort/img2.jpg",
      name: "2 Days Tour Jaipur II (Special)",
      desc: "Nahargarh Fort, Jaigarh Fort, Amber Fort, Panna Meena Ka Kund, Chulgiri, Gulab Bagh",
    },
  ];

  return (
    <section id="packages" className="py-10 bg-gray-100">
    <div className='bg-gray-100 p-4 mb-4'>

    <h2 className="text-4xl font-bold mb-5 text-blue-900 inline-block border-b-4 border-yellow-400 mb-6">
  Packages Available
</h2>
    </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 ">
        {pakedata.map((data) => (
          <div key={data.id} className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={data.img} alt={data.name} className="w-full h-136 object-cover " />
            <div className="absolute top-2 left-2 bg-green-600 text-white  text-lg font-bold px-2 py-1 rounded">₹90 OFF</div>
            <div style={{backgroundColor: 'rgba(45, 45, 49, 0.37)', padding:'10px'}} className="absolute  bottom-0 left-0 w-full bg-gradient-to-t text-center  from-black/80 to-transparent p-4 text-white">
              <h3 className="text-2xl  font-bold" >{data.name}</h3>
              <p className="text-xl ">{data.desc}</p>
              {data.price && data.discount && (
                <div className="mt-2 text-sm">
                  <span className="line-through mr-1">₹{data.price}</span>
                  <span className="text-green-400 font-bold">₹{data.discount}</span>
                </div>
              )}
              <a href={`/packages/${data.id}`} style={{border:'2px solid orange', borderRadius:'20px', padding:'5px', marginTop :'5px', backgroundColor:'orange'}} className="text-white-400   underline   font-bold  mt-2 inline-block">Know More..</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pakages;
