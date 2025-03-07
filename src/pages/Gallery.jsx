import React from "react";
import { useNavigate } from "react-router-dom";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";

import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import gallery11 from "../assets/gallery11.jpeg";
import gallery12 from "../assets/gallery12.jpeg";

const Gallery = () => {
  const navigate = useNavigate();

  // Sample image data (Replace with actual image URLs)
  const assest = [
   gallery1, gallery2, gallery3, gallery4, gallery5, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
  ];

  const handleAddOption = () => {
    navigate("/galleryoption"); // "Add Option" 
  };

  return (
    <div className="mt-24 lg:ml-64 ml-0 min-h-screen ">
      {/* Add Option Button */}
      <button onClick={handleAddOption} className="bg-[#148F50] text-white px-4 py-2 rounded-lg flex items-center">
        <span className="text-lg mr-2">+</span> Add Option
      </button>

      {/* Gallery Section */}
      <h2 className="text-2xl text-white font-semibold bg-green-800 mt-4 p-4 rounded-tl-2xl rounded-tr-2xl">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white p-4 gap-4">
        {assest.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg border p-3 border-[#E1DEDB]">
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
