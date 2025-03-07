import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import aboutimg from "../assets/about.png";
import contactimg from "../assets/contact.png";
import dashboardimg from "../assets/dashboard.png";
import donationimg from "../assets/donation.png";
import testimonialsimg from "../assets/testimonial.png";
import galleryimg from "../assets/gallery.png";
import knowusimg from "../assets/knowus.png";
import logout from "../assets/logout.png";


import dashboardimg2 from "../assets/dashboardimg2.png";
import aboutusimg2 from "../assets/aboutimg2.png";
import testimonialsimg2 from "../assets/testimonialimg2.png";
import galleryimg2 from "../assets/galleryimg2.png";
import knowusimg2 from "../assets/knowusimg2.png";
import donationimg2 from "../assets/donateimg2.png";



const menuItems = [
  { name: "Dashboard", path: "/", iconHover: dashboardimg2 , icon: dashboardimg },
  { name: "About Us", path: "/aboutus", iconHover: aboutusimg2, icon: aboutimg },
  { name: "Testimonials", path: "/testimonials", iconHover: testimonialsimg2, icon: testimonialsimg },
  { name: "Gallery", path: "/gallery", iconHover: galleryimg2, icon: galleryimg },
  { name: "Know us", path: "/knownus", iconHover: knowusimg2, icon: knowusimg },


  { name: "Donation", path: "/contact", iconHover: donationimg2, icon: donationimg },

  // { name: "Setting", path: "/setting", iconHover: , icon: settingimg },
  // { name: "Profile", path: "/profile", iconHover: , icon: profileimg },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Sidebar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-4 z-250  p-1 rounded-md text-white"
      >
        <CiMenuFries size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-100 h-full md:mt-12 mt-6 bg-white text-[#646363] p-5 transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:w-64 lg:h-screen`}
      >
        <ul className="mt-16 space-y-4 ">
        {menuItems.map(({ name, path, icon, iconHover }, index) => (
            <Link key={index} to={path} onClick={() => setIsOpen(false)}>
              <li
                className="p-3 mt-4 flex items-center gap-3 hover:text-white hover:bg-[#148F50] hover:rounded-bl-xl hover:rounded-tl-xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={hoveredIndex === index ? iconHover : icon} alt={name} className="w-6 h-6" />
                {name}
              </li>
            </Link>
          ))}
        </ul>
          
          

        {/* Logout Button */}

        <div className="absolute  bottom-16 left-5 flex gap-2 items-center cursor-pointer ">
          <img src={logout} alt="Logout" className="w-6 h-6" />
          <p className="text-lg ">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
