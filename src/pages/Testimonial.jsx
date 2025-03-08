import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {  useNavigate } from "react-router-dom";

const Testimonial = () => {
  // Static data with 7 entries
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "John Doe",designation:"CEO", description: "  minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
    { id: 2, name: "Jane Smith",designation:"Employee", description: " minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
    { id: 3, name: "Alice Johnson",designation:"CEO", description: " minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
    { id: 4, name: "Bob Brown",designation:"Employee", description: " minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
    { id: 5, name: "Charlie Davis",designation:"Worker", description: "minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.r", file: "⬆️" },
    { id: 6, name: "Eve Wilson",designation:"CEO", description: "minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
    { id: 7, name: "Frank Moore",designation:"HR", description: "minus, aperiam suscipit consectetur, voluptas ad  molestias libero maxime aut laborum.", file: "⬆️" },
  ];

  const handleAddOption = () => {
    navigate("/testimonialoption");
  };

  return (
    <div className="mt-24 lg:ml-64 ml-0 min-h-screen  text-center p-10">
      {/* Header Section */}
      <button onClick={handleAddOption} className="bg-[#148F50] text-white px-4 py-2 rounded-lg flex items-center">
        <span className="text-lg mr-2">+</span> Add Option
      </button>

      {/* Responsive Table Container */}
      <div className="mt-6  border border-gray-300 rounded-lg overflow-x-auto">
        <table className="w-full  border-collapse min-w-[600px] ">
          <thead>
            <tr className="bg-[#148F50] text-white text-center pl-6">
              <th className="p-3 ">Name</th>
              <th className="p-3 ">Designation</th>
              <th className="p-3 ">Description</th>
              <th className="p-3 ">Uploaded File</th>
              <th className="p-3 ">Action</th>
            </tr>
          </thead>
          <tbody>
             {data.map((item) => (
                          <React.Fragment key={item.id}>
                          <tr id="textRow"  className="bg-white text-[#007838]    pl-6"> 
                          
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.designation}</td>
                            <td className="p-3 text-sm text-left w-1/3">{item.description}</td>
                            <td className="p-3  ">
                              <button className=" text-[#007838] p-2 rounded border-2 border-dotted px-9 py-4">{item.file}</button>
                            </td>
                            <td className="p-3  mt-4 flex items-center justify-center space-x-3  ">
                            <IoCreateOutline className="text-[#148F50] text-xl" />
            
                             <RiDeleteBin6Fill className="text-[#F80505] text-xl" />
                            </td>
                            
                          </tr>
                           <tr>
                           <td colSpan="4" className="px-4">
                             <hr className="border-t border-[#EAE9E9]  " />
                           </td>
                         </tr>
                         </React.Fragment>
                         
                        ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Testimonial;
