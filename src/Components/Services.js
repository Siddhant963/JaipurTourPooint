import React from 'react'

const Services = () => {
     const servicesdata = [
          {
               id: 1,
               imgg: "/images/car_service.jpg",
               iclass: "fas fa-utensils",
               title: "Cab Service",
               description: "Private car rentals with professional drivers for personalized city tours, airport transfers, and outstation trips from Jaipur.",
               link: "fecilitys/cars"
          },
          {
               id: 2,
               imgg: "/images/hotel_service.jpg",
               iclass: "fas fa-bullhorn",
               title: "Hotel Booking",
               description: "Book top-rated hotels in Jaipur and across Rajasthan at the best prices, with comfortable stays and excellent amenities.",
               link: "fecilitys/hotel"
          },
          {
               id: 3,
               imgg: "/images/bus_service.webp",
               iclass: "fas fa-hotel",
               title: "Bus services",
               description: "Comfortable and budget-friendly bus service for city tours and outstation travel from Jaipur, ensuring timely and safe journeys.",
               link: "fecilitys/bus"
          }
     ]

     return (
          <>
               <section className="services" id="services">
                    <div className='services-header'>
                         <h2 className="services-title">
                              Services
                         </h2>
                    </div>

                    <div className="services-container">
                         {servicesdata.map((service) => {
                              return (
                                   <div className="service-box" key={service.id}>
                                        <div className="service-image-container">
                                             <img src={service.imgg} alt={service.title} className="service-image" />
                                        </div>
                                        <div className="service-content">
                                             <h3 className="service-title">{service.title}</h3>
                                             <p className="service-description">{service.description}</p>
                                             <a className="service-btn" href={service.link}>
                                                  Click Me
                                             </a>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </section>
          </>
     )
}

export default Services