import Doctor from "../layout/Doctor";
import Footer from "../layout/Footer";
import HomeLayout from "../layout/HomeLayout";
import { Trophy, Smile, Wrench, PenTool, DollarSign } from "lucide-react";

function Aboutus() {
  const advantages = [
    {
      icon: <Trophy size={40} color="#00BFFF" />,
      number: "1256",
      text: "The Quality of Used Medical Materials",
    },
    {
      icon: <Smile size={40} color="#00BFFF" />,
      number: "3569",
      text: "A Full Range of Dental Services",
    },
    {
      icon: <Wrench size={40} color="#00BFFF" />,
      number: "5863",
      text: "Dental Implants - New Teeth in One Day",
    },
    {
      icon: <PenTool size={40} color="#00BFFF" />,
      number: "2567",
      text: "Modern Methods of Teeth Straightening",
    },
    {
      icon: <DollarSign size={40} color="#00BFFF" />,
      number: "4852",
      text: "Loyalty Discounts of Regular Customers",
    },
  ];
  
  
  return (
    <HomeLayout>
      <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-6 px-4 text-white">
        <div className="max-w-6xl mx-auto flex md:justify-between justify-center items-center">
          <h1 className="text-2xl font-bold">AboutUs</h1>
          <p className="text-sm hidden md:block">Home /AboutUs</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-[35%]">
          <img
            src="/flowteeth.jpg"
            alt="Child at Dentist"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-3xl font-semibold text-gray-800">
            Welcome to Dental Clinic
          </h2>
          <p className="text-gray-600 mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam amet eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-700">
              ✅ Enim ad minima veniam, quis nostrum
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Exercitationem ullam corporis laboriosam
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Nisi ut aliquid ex ea commodi
            </li>
            <li className="flex items-center text-gray-700">
              ✅ Consequatur voluptatem eum fugiat quo.
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Our Advantages
      </h2>

      {/* Flex container instead of grid */}
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200 w-64"
          >
            <div className="mb-4">{adv.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{adv.number}</h3>
            <p className="text-gray-600 mt-2">{adv.text}</p>
          </div>
        ))}
      </div>
    </div>
    <Doctor/>
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        What Our Patients Are Saying
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Ad vegan exceptuer butcher vice lomo. Leggings occaecat craft beer farm-to-table...
      </p>

      {/* Testimonial Section */}
      <div className="flex flex-col items-center mt-10">
        {/* Profile Image */}
        <div className="relative flex items-center">
          <button className="bg-white shadow-md p-3 rounded-full text-gray-600 hover:bg-gray-200 transition mx-4">
            ◀
          </button>
          
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Jacob Brown"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          
          <button className="bg-white shadow-md p-3 rounded-full text-gray-600 hover:bg-gray-200 transition mx-4">
            ▶
          </button>
        </div>

        {/* Testimonial Text */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-2xl mx-auto text-center mt-6">
          <p className="text-gray-700">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium..."
          </p>
          <h4 className="text-lg font-semibold mt-4 text-gray-800">Jacob Brown</h4>
        </div>
      </div>
    </div>
    <Footer/>
    </HomeLayout>
  );
}
export default Aboutus;
