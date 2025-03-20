// File: components/WhyChooseAndFAQ.js
import React from "react";

export default function WhyChooseAndFAQ() {
  return (
    <section className="bg-white py-10 px-4 md:px-10" >
      <div className="container mx-auto">
        {/* Luxury Cars Info */}
        <div className="bg-blue-900 text-white text-center py-4 rounded-md mb-6">
          <p className="font-semibold fs-3">
           Cars Available : Innova | Innova Crysta | Ertiga | Etios | D'Zair | Tampo Traveller | Tavera
          </p>
          <p className="mt-1 fs-3">
            Call or Whatsapp to book Tour car in Jaipur : <br />
            Contact : 8209479644 or 766575860 | E-Mail : rohitmishra365@gmail.com
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Why Choose Us */}
          <div className="border rounded-md p-4 shadow-sm">
            <h2 className="fs-2 text-decoration-underline font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 fs-5">
              <li>23+ Years of Experience in Travel Industries</li>
              <li>Experienced & well-versed drivers</li>
              <li>Clean & well-maintained cars</li>
              <li>Pick-up & Drop from Airport/ Railway Station/Hotel</li>
              <li>Best price guaranteed</li>
              <li>Hassle-free drive in the city</li>
              <li>24*7 customer support</li>
              <li>Responsible assistance of our experts on the tour</li>
              <li>Transparent billing</li>
              <li>100% Customer satisfaction guarantee</li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="border rounded-md p-4 shadow-sm">
            <h2 className="fs-2 text-decoration-underline fs-bold mb-4">FAQ’s on Wedding Car Rental</h2>
            <div className="space-y-4 text-gray-700">
              <div >
                <p className="font-semibold fs-4">Q1: How much I will be charged to hire a car on rent in Jaipur?</p>
                <p className="fs-5">Answer : It will be depends on the type of car which you want to hire, time and distance.</p>
              </div>
              <div>
                <p className="font-semibold fs-4">Q2: Are the cab Charges inclusive of toll, parking, and fuel charges?</p>
                <p className="fs-5">Answer : The charges of car in Jaipur are exclusive of toll, parking, and taxes.</p>
              </div>
              <div>
                <p className="font-semibold fs-4">Q3: What types of cars available on rent in Jaipur?</p>
                <p className="fs-5">Answer : All types of cars available on rent at Rajasthan Cab like Sedan, SUV, XUVs.</p>
              </div>
              <div>
                <p className="font-semibold fs-4">Q4: How early should I pre-book a cab rental in Jaipur?</p>
                <p className="fs-5">Answer : Usually, 15 days prior to booking is advisable for Car Rental. However, if possible, you can also ask for a last-minute booking from our expert.</p>
              </div>
              <div>
                <p className="font-semibold fs-4">Q5: How to hire car on rent in Jaipur?</p>
                <p className="fs-5">Answer : To hire car in Jaipur, you can Call Us or Email Us or you can Fill our Enquiry Form.</p>
              </div>
              <div>
                <p className="font-semibold fs-4">Q6: Can I book a Wedding car rental for outstation in Jaipur?</p>
                <p className="fs-5">Answer : Yes, we offer wedding car rental for outstation events. You can simply explore the range of car rentals we offer for your specific requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
       
      </div>
    </section>
  );
}