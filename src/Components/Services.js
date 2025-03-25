import React from 'react'

const Services = () => {
     const servicesdata = [
     {
          id: 1,
          imgg:"/images/car_service.jpg",
          iclass:"fas fa-utensils",
          title: "Cab Service",
          description: "Private car rentals with professional drivers for personalized city tours, airport transfers, and outstation trips from Jaipur.",
          link: "fecilitys/cars"
     },
     {
          id: 2,
          imgg:"/images/hotel_service.jpg",
          iclass:"fas fa-bullhorn",
          title: "Hotel Booking",
          description: "Book top-rated hotels in Jaipur and across Rajasthan at the best prices, with comfortable stays and excellent amenities.",
          link: "fecilitys/hotel"
     },
     {
          id: 3,
          imgg:"/images/bus_service.webp",
          iclass:"fas fa-hotel",
          title: "Bus services",
          description: "Comfortable and budget-friendly bus service for city tours and outstation travel from Jaipur, ensuring timely and safe journeys.",
          link: "fecilitys/bus"
     }
     
     ]
  return (
    <>
    <section className="services" id="services">

    <div className='bg-white-100 p-4 mb-4'>

<h2 className="text-4xl font-bold mb-5 text-blue-900  border-yellow-400 mb-6 " style={{fontSize:"3rem",padding:"10px"}}>
Services
</h2>
</div>

<div className="box-container " style={{marginBottom:"10px"}}>
     {servicesdata.map((service)=>{
          return(
               <div className="box" key={service.id}>
      {/* <i className={service.iclass}></i> */}
      <img src={service.imgg} alt={service.title}  style={{height:"30vh", width:"100vw"}}/>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a className="px-6 py-3 service-btn bg-yellow text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition" href={service.link}>
  Click Me

</a>

    </div>
          )
     })}
</div>
<div className="morediv">


</div>
</section>
      
    </>
  )
}

export default Services