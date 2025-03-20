import React from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"

const Busservicepage = (props) => {
    const products = props.data;
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto d-flex flex-column flex-md-row align-items-center px-5 py-5">
    <div className="col-md-6 mb-4 mb-md-0">
      <img className="img-fluid rounded" alt="hero" src="/images/hero.jpg" style={{height:"50vh"}}/>
    </div>
    <div className="col-md-6 text-center text-md-start ps-md-5">
      <h1 className="display-4 fw-medium text-dark text-center fw-bold " style={{color:"yellow"}}>Khamma Ghani<br className="d-none d-lg-inline"/>Jaipur tour point </h1>
      <p className="mb-4 fs-2">JaipurTourPoint.com offers reliable and affordable bus services for city tours, outstation trips, and special events. Our fleet is well-maintained, ensuring a smooth journey with comfort and safety at the core of our service.</p>
      {/* <div className="d-flex justify-content-center justify-content-md-start">
        <button className="btn btn-warning text-white me-3">Button</button>
        <button className="btn btn-light text-dark">Button</button>
      </div> */}
    </div>
  </div>
</section>


        <section className="bg-secondary text-light py-5">
          <div className="container">
            <div className="row">
            <div className='col-12'>
              <h1 className='fw-bold text-light fs-1 mb-5 text-decoration-underline'>Our Vehicles</h1>
            </div>
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card bg-secondary text-white border-0">
                    <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                      <img src={product.img} alt="product" className="card-img-top object-fit-cover" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="card-body">
                      <h6 className="text-muted text-uppercase mb-1">CATEGORY</h6>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.capacity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-dark bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="text-center">
        <div className='d-flex flex-row justify-content-center'>

          <img alt="testimonial" className="rounded-circle border border-secondary p-1 " width="80" height="80" src="https://dummyimage.com/302x302"/>
        </div>
          <p className="mt-3 ">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
            Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
          </p>
          <div className="bg-warning mx-auto mt-3 mb-2" style={{ width: "50px", height: "4px", borderRadius: "2px" }}></div>
          <h5 className="fw-bold text-white">HOLDEN CAULFIELD</h5>
          <p className="text-secondary">Senior Product Designer</p>
        </div>
      </div>
      
      <div className="col-lg-4 mb-4">
        <div className="text-center">
        <div className='d-flex flex-row justify-content-center'>

<img alt="testimonial" className="rounded-circle border border-secondary p-1 " width="80" height="80" src="https://dummyimage.com/302x302"/>
</div>          <p className="mt-3 ">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
            Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
          </p>
          <div className="bg-warning mx-auto mt-3 mb-2" style={{ width: "50px", height: "4px", borderRadius: "2px" }}></div>
          <h5 className="fw-bold text-white">ALPER KAMU</h5>
          <p className="text-secondary">UI Developer</p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="text-center">
        <div className='d-flex flex-row justify-content-center'>

<img alt="testimonial" className="rounded-circle border border-secondary p-1 " width="80" height="80" src="https://dummyimage.com/302x302"/>
</div>          <p className="mt-3 ">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
            Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
          </p>
          <div className="bg-warning mx-auto mt-3 mb-2" style={{ width: "50px", height: "4px", borderRadius: "2px" }}></div>
          <h5 className="fw-bold text-white">HENRY LETHAM</h5>
          <p className="text-secondary">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>


     
    </>
    
  );
}

export default Busservicepage