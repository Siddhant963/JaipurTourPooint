import Image from "next/legacy/image";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// Tour packages data with all places
const tourPackages = [
  {
    image: '/images/jaipurplaces/image1.jpg',
    placeName: 'Raj Mandir',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Famous cinema hall known for its royal interior and Bollywood shows.',
    rating: 4.5,
  },
  {
    image: '/images/jaipurplaces/image2.jpg',
    placeName: 'Birla Mandir',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'A modern white marble temple dedicated to Lord Vishnu and Goddess Lakshmi.',
    rating: 4.7,
  },
  {
    image: '/images/jaipurplaces/image3.webp',
    placeName: 'Albert Hall',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'A grand museum showcasing artifacts and Indo-Saracenic architecture.',
    rating: 4.4,
  },
  {
    image: '/images/jaipurplaces/image4.avif',
    placeName: 'Zoo',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Home to diverse wildlife and bird species, ideal for family visits.',
    rating: 4.2,
  },
  {
    image: '/images/jaipurplaces/image6.jpeg',
    placeName: 'Hawa Mahal',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Iconic palace with 953 windows offering panoramic city views.',
    rating: 4.8,
  },
  {
    image: '/images/jaipurplaces/image7.jpg',
    placeName: 'Jantar Mantar',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'World’s largest stone sundial and UNESCO World Heritage Site.',
    rating: 4.6,
  },
  {
    image: '/images/jaipurplaces/image8.jpg',
    placeName: 'City Palace',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Historic royal residence with courtyards, gardens, and museums.',
    rating: 4.7,
  },
  {
    image: '/images/jaipurplaces/image9.jpg',
    placeName: 'Wax Museum',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Life-like wax figures of celebrities and historical personalities.',
    rating: 4.3,
  },
  {
    image: '/images/jaipurplaces/image10.jpg',
    placeName: 'RTDC',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Tourism center offering guides, tour packages, and local insights.',
    rating: 4.0,
  },
  {
    image: '/images/jaipurplaces/image11.jpg',
    placeName: 'Sanjay Museum',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Museum displaying regional history, art, and ancient artifacts.',
    rating: 4.1,
  },
  {
    image: '/images/jaipurplaces/image12.jpg',
    placeName: 'Jal Mahal',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Beautiful palace situated in the middle of Man Sagar Lake.',
    rating: 4.9,
  },
  {
    image: '/images/jaipurplaces/image13.webp',
    placeName: 'Khazana Mahal',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Treasury palace showcasing royal jewels and historic valuables.',
    rating: 4.3,
  },
  {
    image: '/images/jaipurplaces/image14.jpeg',
    placeName: 'Kanak Ghaati',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Serene garden with temples and scenic views of the hills.',
    rating: 4.2,
  },
  {
    image: '/images/jaipurplaces/image15.jpg',
    placeName: 'Amber Fort',
    timing: '9 AM to 5 PM',
    location: 'Ghoomar Jaipur',
    description: 'Majestic fort with artistic style and stunning hilltop views.',
    rating: 5.0,
  },
 
];

export default function VehiclesTourPackages() {
  return (
    <section className={`${poppins.className} vehicles-section bg-light py-5 explore`}>
      <div className="min-h-screen explore text-gray-800 px-4 md:px-8" style={{padding:"15px"}}>
      <div className=" pt-8 pb-4">
      <div className='bg-white-100 p-4 mb-4'>

        <h2 className="text-4xl text-center font-bold mb-5 text-white  border-yellow-400 mb-6 " style={{fontSize:"4rem",padding:"10px"}}>
       Ghoomar Jaipur
        </h2>
        </div>        
        <p className="mt-2 font-serif font-bold text-gray-600 text-2xl md:text-3xl" style={{marginBottom:"20px", borderLeft:"5px solid blue" , backgroundColor:"white", padding:"5px" }}>
          Rajasthan’s Capital And UNESCO Heritage Site, Jaipur takes pride in being the most explored tourist destination of India...
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
        {tourPackages.map((place, index) => (
          <div key={index} className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300" style={{borderRadius:"25px"}}>
            <div className="relative h-48 w-full">
              <Image
                src={place.image}
                alt={place.placeName}
                layout="fill"
                objectFit="cover"
                className="rounded-t placetovisitimg "
              
                              />
            </div>
            <div className="" style={{padding:"10px"}}>
              <h2 className="font-semibold text-2xl">{place.placeName}</h2>
              <div className="flex justify-between text-xl md:text-2xl font-semibold text-gray-500 my-1">
                <span>{place.timing}</span>
                <span className="capitalize">{place.location}</span>
              </div>
              <p className=" text-xl md:text-2xl text-gray-600 mt-1 " style={{marginTop:"7px"}}>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
