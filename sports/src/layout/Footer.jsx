
const Footer = () => {

  const news = [
    {
      date: "Jan 23",
      title: "Daily Exercise is Essential",
      description: "When was the last time you went out for a...",
    },
    {
      date: "Jan 30",
      title: "Medical Advice for All Ages and Sexes",
      description: "How often does a post start with all these words? Allergy...",
    },
    {
      date: "Feb 15",
      title: "Diabetes Diet and Healthy Food Tips",
      description: "Let’s talk about what is health and how can this...",
    },
  ];
  return (
    <footer className="bg-gray-800 text-gray-300 py-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Socials */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
            Socials
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400">Flickr</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400">Vimeo</a></li>
          </ul>
        </div>

        {/* Dental Clinic */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
            Dental Clinic
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Dr. Alexander Sims</a></li>
            <li><a href="#" className="hover:text-blue-400">Dr. Amy Clarke</a></li>
            <li><a href="#" className="hover:text-blue-400">Dr. Archie White</a></li>
            <li><a href="#" className="hover:text-blue-400">Dr. Dylan Taylor</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
            About Us
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Orthodontics</a></li>
            <li><a href="#" className="hover:text-blue-400">Special Offers</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-2 mb-4">
            Contact
          </h3>
          <p>Brooklyn, NY 10036, United States</p>
          <p>Phone: <a href="tel:1-800-123-1234" className="hover:text-blue-400">1-800-123-1234</a></p>
          <p>Email: <a href="mailto:example@dental-clinic.com" className="hover:text-blue-400">example@dental-clinic.com</a></p>
          <p>Office Hours: 08:00 AM - 08:00 PM</p>
        </div>

      </div>
      <div className="w-full  text-white border-t-2 flex justify-center text-[20px] items-center pt-3 h-auto mt-4">
        Copyright ©2025 all rights reserved
      </div>
    </footer>

  );
};

export default Footer;
