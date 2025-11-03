export default function Aboutvehiclesandsidemenu() {
  const besttourdata =[
    {
      id:1,
      img:"/images/Pushkar/img3.jpg" ,
      name:"5 Days Tour package",
      Link: '/packages/1',
      desc: "Jaipur , Ajmer , Pushkar , Chittorgarh ,Udaipur , Mount Abu "

    },
    {
      id:2,
      img:"/images/jodhpur/img1.jpg" ,
      name:"5 Days Tour package II",
      Link: '/packages/2',
      desc: "Ajmer , Pushkar, Jodhpur, Jaisalmer, Udaipur, Jaipur "

    },
    {    id:3,
         img:"/images/Chittorgarh/img2.jpg" ,
         name:"7 Days Tour package",
         Link: '/packages/3',
         desc: "Ajmer, Pushkar, jodhpur, Jaisalmer, Udaipur, Mount abu, Chittorgarh , jaipur "
    },
    {
         id:4,
         img:"/images/Ranthambore/img2.jpg" ,
         name:"9 Days Tour package",
         Link: '/packages/4',
         desc: "jaipur, Bikaner, jodhpur, jaisalmer, Udaipur, Mount abu, Chittorgarh, Ajmer ,Pushkar, Ranthambore "  
       },
       {
         id:5,
         img:"/images/hawa_mehel/img1.jpg" ,
         name:"2 Days Tour jaipur I (spaical)",
         Link: '/packages/5',
         desc: "jaipur, birla mandir , Albert Hall Museum,Hawa Mahal, Jantar Mantar, City Palace, Khazana Mahal ,Jal Mahal"
  
       },
       {
         id:6,
         img:"/images/Nahargarh_Fort/img1.jpg" ,
         name:"2 Days Tour jaipur II (spaical)",
         Link: '/packages/6',
         desc: "Nahargarh Fort, Jaigarh Fort, Amber Fort , Panna Meena Ka Kund, Chulgiri ,Gulab Bagh"
     
  
       }]
    return (
      <div className=" container min-h-screen bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
  
          {/* Main Content */}
          <div className="lg:col-span-3">
            
  
            {/* Highlighted Box */}
            <div className="bg-gray-100 p-4 mb-4 mt-5">
              <h2 className="text-2xl font-bolder text-gray-800" style={{fontWeight:"50px"}}>
               The Best Tour Travelling Agency
              </h2>
            </div>
  
            <p className="text-gray-700 text-2xl   ">
              Planning the perfect trip is effortless with Jaipur Tour Point, recognized as one of the best tour travelling agencies in the industry. We specialize in delivering unforgettable travel experiences customized to suit your needs, whether you're seeking a luxurious escape, an adventurous journey, or a cultural exploration. Our wide selection of tailor-made tour packages includes sightseeing tours, comfortable accommodations, local transportation, and expert-guided experiences that let you explore every destination with ease.

                At Jaipur Tour Point, we are committed to providing exceptional service, affordable pricing, and 24/7 customer assistance to ensure a seamless travel experience. Our experienced team of travel planners ensures every detail is handled with care, from your itinerary planning to your return journey, giving you complete peace of mind. We take pride in our reputation for quality, reliability, and a personal touch that makes every trip special.

                Whether <span className="font-semibold text-blue-700" >you’re visiting Jaipur’s</span> historic palaces, planning a wedding tour, or exploring <span className="font-semibold text-blue-700">India’s</span>  diverse landscapes, Jaipur Tour Point promises a comfortable, safe, and memorable journey. Join the many satisfied travelers who trust us as their preferred tour partner and discover the joy of hassle-free travel.
            </p>
          </div>
  
          {/* Sidebar */}
          <div className="space-y-6 mt-5">
            <h3 className="text-xl font-bold text-red-700 border-b pb-2 bg-warning p-4 fw-bold text-light border">Our Popular Tours</h3>
  
            {/* Tour Item */}
          
            {besttourdata.map((data)=>{
              return(
                
              <div className="flex space-x-4 border rounded-lg p-2 mb-4   ">
              <img src={data.img} alt="Tour 1" className="w-20 h-20 rounded object-cover" style={{height:"10vh"}} />
              <div className="px-4">
                <p className="text-lg font-bold  text-gray-600">{data.name}</p>
                <p className="text-sm font-medium text-gray-800">{data.desc}</p>
                <a href={data.Link} className="text-blue-500 hover:underline">View Details</a>
              </div>
            </div>
              )
            })}
            
            {/* More tour items can be added similarly */}
          </div>
  
  
          
        </div>
      </div>
    );
  }
  