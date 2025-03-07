import React from "react";
import HomeLayout from "../layout/HomeLayout";
import Footer from "../layout/Footer";

const services = [
  { img: "/whiteningteeth.jpg", title: "Complete Whitening Pack" },
  { img: "/sedationteeth.jpg", title: "Sedation Dentistry" },
  { img: "/childteeth.webp", title: "Dental Cleaning" },
  { img: "/cosmeticteeth.jpg", title: "Cosmetic Dentistry" },
  { img: "/sedationteeth.jpg", title: "Fissure Sealants" },
  { img: "/flowteeth.jpg", title: "Cleaning with Air Flow" },
  { img: "/teeth2.jpg", title: "Aligning the Teeth" },
  { img: "/teeth1.jpg", title: "Child's First Dental Visit" },
];

const stats = [
  { value: "64%", text: "Dental Prevention" },
  { value: "74%", text: "Tooth Extraction" },
  { value: "94%", text: "Oral Surgery" },
  { value: "83%", text: "Whitening Teeth" },
  { value: "76%", text: "Emergency Care" },
];

const ServicesPage = () => {
  return (
   <HomeLayout>
     <div className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-6 px-4 text-white">
        <div className="max-w-6xl mx-auto flex md:justify-between justify-center items-center">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="text-sm hidden md:block">Home / Our Services</p>
        </div>
      </div>

      {/* Teeth Whitening Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Teeth Whitening – A Popular Trend</h2>
          <p className="text-gray-700">
            Teeth whitening lightens teeth and helps to remove stains and discoloration...
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/whiteningteeth.jpg" alt="Before After" className="rounded-lg" />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Some Statistics</h2>
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-400 to-teal-400 p-6 rounded-lg text-white text-center w-40">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </HomeLayout>
  );
};

export default ServicesPage;
