"use client";

import React, { useState } from 'react';
import Carausal from '@/Components/Carausal';
import LoginForm from '@/Components/LoginForm';
import Navbar from '@/Components/Navbar';
import Pakages from '@/Components/Pakages';
import Services from '@/Components/Services';
import Gallery from '@/Components/Gallery';
import Review from '@/Components/Review';
import Contact from '@/Components/Contact';
import Brand from '@/Components/Brand';
import Footer from '@/Components/Footer';
import FloatingContact from '@/Components/FloatingContact';
import Explore from "@/Components/exploringplaces";
import detailpack from "@/Components/PackageDetails";
import Aboutsp from "@/Components/Aboutussaparate";
const Page = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const handleLoginClick = () => {
    console.log(isLoginFormOpen); 
    setIsLoginFormOpen(!isLoginFormOpen); // Toggle the login form visibility
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormOpen(false); // Close the login form
  };

  return (
    <>
      <Navbar onLoginClick={handleLoginClick} />
      <Carausal />
      <Pakages/>
      <Services/>
      <Explore/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Brand/>
      <FloatingContact/>
      <Aboutsp/>
      <Footer/>
      
    
    </>
  );
};

export default Page;