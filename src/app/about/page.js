import AboutSection from "@/Components/Aboutussaparate"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"



const page = () => {
  return (
    <>
    <Navbar/>
    <div 
  className=" banner-sr relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center" 
 
>
  {/* Overlay */}
  

  {/* Title Text */}
  <h1 className="relative text-white bg-yellow-400 text-3xl md:text-4xl font-bold text-center">
  Jaipura TOur Point - About Us
  </h1>
  
</div>
      <AboutSection/>
      <Footer/>
    </>
  )
}

export default page
