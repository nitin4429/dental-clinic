import React from "react";

const services = [
  {
    title: "Complete Whitening Pack",
    category: ["Dental Care", "Services"],
    image: "/whiteningteeth.jpg",
    likes: 102,
    comments: 0,
  },
  {
    title: "Sedation Dentistry",
    category: ["Dental Care", "Services"],
    image: "/sedationteeth.jpg",
    likes: 180,
    comments: 0,
  },
  {
    title: "Cosmetic Dentistry",
    category: ["Services", "Special Service"],
    image: "/cosmeticteeth.jpg",
    likes: 224,
    comments: 0,
  },
  {
    title: "Cleaning with Air Flow",
    category: ["New Services", "Special Service"],
    image: "/flowteeth.jpg",
    likes: 192,
    comments: 0,
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold pl-14 text-gray-800">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-blue-500">
                  {service.category.map((cat, i) => (
                    <span key={i} className="hover:underline mr-1">
                      {cat}
                    </span>
                  ))}
                </p>
                <div className="mt-2 flex justify-between text-gray-500 text-sm">
                  <span>💬 {service.comments}</span>
                  <span>❤️ {service.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
