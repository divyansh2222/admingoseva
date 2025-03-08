import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardProvider";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import donationimg from "../assets/donationimg.png";
import volunteerimg from "../assets/volunteerimg.png";
import testimonialimg from "../assets/testimonialimg.png";
import StatCard from "../components/StatCard";




const AdminDashboard = () => {
  const { Donation, Volunter, Testimonial } = useContext(DashboardContext);
  const DonationtoLocalSting = Number(Donation || 0).toLocaleString("en-US");
  const VoluntertoLocaleString = Number(Volunter || 0).toLocaleString("en-US");
  const TestimonialtoLocaleString = Number(Testimonial || 0).toLocaleString("en-US");
  
  return (
    <div className="p-10 mt-20 lg:ml-64  ml-0  min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Donation" value={`${DonationtoLocalSting}`} icon={donationimg} />
        <StatCard title="Testimonials" value={TestimonialtoLocaleString} icon={testimonialimg} />
        <StatCard title="Total Volunteers" value={VoluntertoLocaleString} icon={volunteerimg} />
      </div>

      
    </div>
  );
};



export default AdminDashboard;
