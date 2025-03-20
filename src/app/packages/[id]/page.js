// app/packages/[id]/page.js (Server Component)
import React from 'react';
import PackageDetails from '@/Components/PackageDetails'; // Your Client Component
import packagesData from '../../../data/all_pakeges_data.json'; // Adjust the path
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import FloatingContact from '@/Components/FloatingContact';


export default async function Page({ params }) {
  const { id } = await  params; // Destructure `id` from `params`

  // Find the package data based on the packageId
  const packageData = packagesData.packages.find(
    (pkg) => pkg.packageId === parseInt(id)
  );

  if (!packageData) {
    return <div className="text-center text-red-500 text-2xl font-semibold mt-10">Package not found!</div>;
  }

  return (
    <>
    <Navbar/>
  <PackageDetails packageData={packageData} />
  <div className="mt-220 w-full md:w-1/3 px-4 md:px-0">
  
  </div>

  <FloatingContact/>
  <Footer/>

    </>
  )
  ;
}