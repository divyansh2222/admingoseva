import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import AboutPage from "./pages/AboutPage";
import AddOptionPage from "./pages/AddOptionPage";
import Testimonial from "./pages/Testimonial";
import TestimonialOptionpage from "./pages/TestimonialOptionpage";
import Gallery from "./pages/Gallery";
import GalleryOption from "./pages/GalleryOption";
import Knownus from "./pages/Knownus";
import KnownusOption from "./pages/KnownusOption";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="p-6 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/aboutus" element={<AboutPage />} />
              <Route path="/add-option" element={<AddOptionPage />} />
              <Route path="/knownus" element={<Knownus />} />
              <Route path="/testimonials" element={<Testimonial />} />
              <Route path="/testimonialoption" element={<TestimonialOptionpage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/galleryoption" element={<GalleryOption />} />
              <Route path="/knowusoption" element={<KnownusOption />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;