import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";

const teamMembers = [
  {
    name: "Archie White",
    role: "Dentist",
    image: "/doctor2.jpg", // Replace with actual image URL
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      skype: "#",
    },
  },
  {
    name: "Dylan Taylor",
    role: "Orthodontist",
    image: "/doctor3.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      skype: "#",
    },
  },
  {
    name: "Amy Clarke",
    role: "Hygienist",
    image: "/doctor1.jpg",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      skype: "#",
    },
  },
];

const Doctor = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Meet Our Doctor
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[25%] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
              />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-blue-500">{member.role}</p>
              <div className="flex gap-4 mt-4 text-gray-500 text-xl">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-600" />
                </a>
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-500" />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-blue-400" />
                </a>
                <a href={member.social.skype} target="_blank" rel="noopener noreferrer">
                  <FaSkype className="hover:text-blue-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
