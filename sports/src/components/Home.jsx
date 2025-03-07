import HomeLayout from "../layout/HomeLayout";
import Footer from "../layout/Footer";
import { FaTooth, FaBroom, FaFlask, FaTeethOpen } from "react-icons/fa";
import Services from "../layout/Services";
import Doctor from "../layout/Doctor";

function Home() {

  const services = [
    {
      icon: <FaTooth className="text-cyan-500 text-5xl" />,
      title: "Teeth Whitening",
      description: "Whitening is among the most popular dental procedures because it can greatly improve how your teeth look."
    },
    {
      icon: <FaBroom className="text-cyan-500 text-5xl" />,
      title: "Teeth Cleaning",
      description: "Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries)."
    },
    {
      icon: <FaFlask className="text-cyan-500 text-5xl" />,
      title: "Modern Anesthetic",
      description: "Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia."
    },
    {
      icon: <FaTeethOpen className="text-cyan-500 text-5xl" />,
      title: "Quality Brackets",
      description: "Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly."
    }
  ];
  
  return (
    <HomeLayout>
     <div className="relative w-full h-auto bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="text-white max-w-lg z-10">
          <h3 className="text-lg font-light">Welcome to Dental Clinic</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">A healthy smile</h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-1 bg-white text-blue-600 px-2 inline-block pb-3">begins with a child.</h1>
          <p className="mt-4 text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Book Now</button>
            <button className="border border-white px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-blue-600">Learn More</button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-12 z-10">
          <img src="/homechild.png" alt="Child brushing teeth" className="w-full md:w-[600px]" />
        </div>
      </div>
    </div>

    <div className="py-16 w-full bg-white">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-wrap justify-center gap-6 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-[20%]">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="container w-full mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:justify-center">
        {/* Clinic News */}
        <div className="bg-teal-400 p-6 md:w-[20%] w-full  text-white">
          <h2 className="text-2xl font-semibold">Clinic News</h2>
          <p className="mt-2">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis.</p>
          <a href="#" className="mt-4 inline-block text-white underline">Read more</a>
        </div>
        
        {/* Opening Hours */}
        <div className="bg-blue-400 p-6 md:w-[20%] w-full  text-white">
          <h2 className="text-2xl font-semibold">Opening Hours</h2>
          <ul className="mt-2">
            <li className="flex justify-between">Monday - Friday <span>8:00 - 17:00</span></li>
            <li className="flex justify-between">Saturday <span>9:30 - 17:30</span></li>
            <li className="flex justify-between">Sunday <span>9:30 - 15:00</span></li>
          </ul>
        </div>
        
        {/* Booking Form */}
        <div className="bg-blue-500 md:w-[40%] w-full p-4 text-white">
          <h2 className="text-2xl font-semibold">Booking a Visit</h2>
          <form className="mt-4 flex flex-wrap gap-6">
            <select className="p-2 bg-blue-400 rounded-lg text-white flex-1 min-w-[150px]">
              <option>Department 1</option>
              <option>Department 2</option>
            </select>
            <input type="text" placeholder="Name" className="p-2 bg-blue-400 rounded-lg text-white placeholder-white flex-1 min-w-[150px]" />
            <input type="text" placeholder="Phone" className="p-2 bg-blue-400 rounded-lg text-white placeholder-white flex-1 min-w-[150px]" />
            <input type="email" placeholder="Email" className="p-2 bg-blue-400 rounded-lg text-white placeholder-white flex-1 min-w-[150px]" />
            <input type="date" className="p-2 bg-blue-400 rounded-lg text-white flex-1 min-w-[150px]" />
            <button className="p-2 bg-white text-blue-500 rounded-lg font-semibold flex-1 min-w-[150px]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
      <Services/>
      <Doctor/>
      <div className="py-12 bg-white">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
        {/* Testimonials Section */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
          <p className="text-blue-500">What Our Patients Say About Us</p>
          <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
            <h3 className="text-lg font-semibold">Friendly staff, very helpful.</h3>
            <p className="text-gray-600 mt-2">
              Over the years my dentist has helped me overcome my fear of going to the dentist and fear of the pain...
            </p>
            <div className="flex items-center mt-4">
              <img src="/doctor1.jpg" alt="Lily Milton" className="w-12 h-12 rounded-full" />
              <div className="ml-3">
                <h4 className="text-gray-800 font-semibold">Lily Milton</h4>
                <p className="text-gray-500 text-sm">Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us</h2>
          <p className="text-blue-500">Let Us Help You</p>
          <div className="flex mt-4">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-semibold mr-2">
              Kids Dentist
            </button>
            <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-semibold mr-2">
              Oral Surgery
            </button>
            <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-semibold">
              Orthodontics
            </button>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <img src="/childteeth.webp" alt="Kids Dentist" className="w-40 h-40 rounded-lg object-cover" />
            <div>
              <h3 className="text-lg font-semibold">Paediatric Dentistry</h3>
              <p className="text-gray-600">
                Pediatric dentists are dedicated to the oral health of children from infancy through the teen years.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
      <Footer />
    </HomeLayout>
  );
}
export default Home;
