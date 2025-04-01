import React, { useState } from 'react';
import { Mail, Phone, MessageSquareText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section id="contact" className=" py-12 px-6 md:px-16 text-gray-800" >
      <h1 className="text-center text-4xl md:text-6xl font-bold mb-10" style={{marginTop:"10px"}}>
        Contact <span className="text-blue-500">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center" style={{marginTop:"20px"}}>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/images/contactbg.jpeg"
            alt="Contact Us"
            className="w-full h-full rounded-4xl shadow-gray-600"
          />
        </div>

        {/* Contact Details Section */}
        <div className="space-y-8 rounded-4xl " style={{padding:"20px",height:"100%"}}>
          <p className="text-3xl text-yellow-600 font-bold md:text-4xl" style={{marginBottom:"10px"}}>
            Feel free to reach out via WhatsApp, Email, or Phone.
          </p>
          <p className="text-3xl text-yellow-600 font-bold md:text-4xl" style={{marginBottom:"10px"}}>
         <span> Jaipur Tour Point</span> – Your Gateway to the Pink City!
          </p>
          <p className="text-lg text-gray-600 font-bold md:text-lg" style={{marginBottom:"10px"}}>
          Have questions or need assistance planning your Jaipur adventure? We’re here to help! Feel free to reach out to us for bookings, inquiries, or customized travel experiences.
          </p>
          <p className="text-lg text-gray-600 font-bold md:text-lg" style={{marginBottom:"10px"}}>
          Business Hours:
          🕘 Monday – Sunday: 24*7 
          </p>

          <div className="space-y-5 text-base md:text-lg ">
            <div className="flex items-center text-center space-x-4" style={{marginBottom:"15px"}}>
              
              <a
                href="https://wa.me/+918209479644"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-2xl btn text-white  "
                style={{marginLeft:"5px",borderRadius:"20px", display:"flex"}}
              ><MessageSquareText className="text-green-500 w-7 h-7 md:w-8 md:h-8 text-white  " style={{marginRight:"10px"}} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center space-x-4 " style={{marginBottom:"15px"}}>
              <a
                href="mailto:rohitmishra365@gmail.com"
                className="text-blue-600 hover:underline text-2xl btn text-white "
                style={{marginLeft:"5px",borderRadius:"20px", display:"flex"}}
              >              <Mail className="text-red-500 w-7 h-7 md:w-8 md:h-8 text-white " style={{marginRight:"10px"}} />

                rohitmishra365@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+918209479644"
                className="text-blue-600 hover:underline text-2xl btn text-white "
                style={{marginLeft:"5px",borderRadius:"20px", display:"flex"}}
              >              <Phone className="text-blue-500 w-7 h-7 md:w-8 md:h-8 text-white " style={{marginRight:"10px"}} />

                +91 8209479644
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
