import React from "react";
import HomeLayout from "../layout/HomeLayout";
import Footer from "../layout/Footer";

const services = [
  { icon: "🦷", title: "Cosmetic Dentistry" },
  { icon: "🛁", title: "Dental Cleaning" },
  { icon: "💉", title: "Sedation Dentistry" },
  { icon: "✨", title: "Complete Whitening" },
];

const AppointmentPage = () => {
  return (
   <HomeLayout>
     <div className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-6 px-4 text-white">
        <div className="max-w-6xl mx-auto flex md:justify-between justify-center items-center">
          <h1 className="text-2xl font-bold">Online Appointment</h1>
          <p className="text-sm hidden md:block">Home / Online Appointment</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-semibold">Simple and Fast</h3>
                <p className="text-gray-700">We know what is best for you and make everything easy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="text-xl font-semibold">Professional Level</h3>
                <p className="text-gray-700">Highly skilled professionals for the best dental care.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🛠️</span>
              <div>
                <h3 className="text-xl font-semibold">Variety of Services</h3>
                <p className="text-gray-700">We provide everything from routine care to oral surgeries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/cosmeticteeth.jpg" alt="Dental Care" className="rounded-lg" />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-r from-blue-400 to-teal-400 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/30 text-white text-center p-6 rounded-lg backdrop-blur-md">
              <span className="text-4xl block mb-3">{service.icon}</span>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">High-quality dental treatments for a brighter smile.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Make an Appointment</h2>
        <div className="max-w-4xl mx-auto px-4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name (required)" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Your Phone Number (required)" className="border p-3 rounded-lg w-full" />
            <select className="border p-3 rounded-lg w-full">
              <option>Select a Service</option>
              <option>Cosmetic Dentistry</option>
              <option>Dental Cleaning</option>
              <option>Sedation Dentistry</option>
              <option>Complete Whitening</option>
            </select>
            <select className="border p-3 rounded-lg w-full">
              <option>Select Staff</option>
              <option>Dr. John Doe</option>
              <option>Dr. Jane Smith</option>
            </select>
            <input type="date" className="border p-3 rounded-lg w-full" />
            <div className="flex gap-4">
              <input type="time" className="border p-3 rounded-lg w-full" />
              <input type="time" className="border p-3 rounded-lg w-full" />
            </div>
          </form>
          <div className="text-center mt-6">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Booking a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </HomeLayout>
  );
};

export default AppointmentPage;
