import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddOptionPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create URL for image preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, image });
    navigate("/aboutus"); // Navigate back after submission
  };


  return (
    <div className="flex  justify-center items-center  mt-24 md:ml-20  ml-0  min-h-screen h-screen ">
    <form
      onSubmit={handleSubmit}
      className="bg-white px-8 py-8 rounded-lg shadow-lg w-3xl relative md lg:ml-20"
    >
        {/* Cancel Button on Top-Right Corner */}
        <button
          type="button"
          className="absolute top-5 right-8 bg-[#F92323] text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
          onClick={() => navigate("/aboutus")}
        >
          cancel ✖
        </button>

     

        {/* Name Input */}
        <label className="block text-sm font-medium text-[#726253]">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="textRow"
          className="mt-1 p-2 shadow-md rounded-2xl w-full"
          required
        />

        {/* Description Input */}
        <label className="block text-sm font-medium text-[#726253] mt-4">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 shadow-md rounded-2xl w-full"
          required
          id="textRow"
        ></textarea>

        {/* Image Upload Input */}
        <label className="block text-sm font-medium text-[#726253] mt-4">
          Upload Image
        </label>
        <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:bg-gray-100">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="flex flex-col items-center">
          <IoCloudUploadSharp  className="text-[#148F50] text-9xl" />
            <span  id="textRow" className="text-[#007838] text-[12px]">Drag and Drop file</span>
          </label>
        </div>

        {/* Image Preview */}
        {image && (
          <div className="mt-4 flex justify-center">
            <img src={image} alt="Uploaded preview" className="h-24 rounded-md shadow-md" />
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
        <button
          type="submit"
          className="mt-8 w-1/3  bg-[#148F50]  font-semibold text-white py-2 rounded-lg hover:bg-green-700"
          id="submitButton"
        >
          Submit
        </button>
        </div>

        
      </form>
    </div>
  );
};

export default AddOptionPage;
