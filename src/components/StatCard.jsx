import { HiDotsHorizontal } from "react-icons/hi";

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white relative p-6 rounded-lg shadow-md flex items-center justify-between border border-gray-300">
        <div className="flex items-center gap-4 md:gap-8">
          <img src={icon} alt="" className="w-18 h-18" />
          <div> <p className="text-xl font-bold">{value}</p>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className=" absolute top-0 right-3"><HiDotsHorizontal className="text-[#8B6429] text-4xl" /></div>
        </div>
      </div>
    );
  };
  export default StatCard;