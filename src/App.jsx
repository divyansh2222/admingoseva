import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/LoginContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import AboutPage from "./pages/AboutPage";
import AddOptionPage from "./pages/AddOptionPage";
import Testimonial from "./pages/Testimonial";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import Login from "./pages/Login";
import TestimonialOptionpage from "./pages/TestimonialOptionpage";
import Knownus from "./pages/Knownus"
import GalleryOption from "./pages/GalleryOption";
import KnownusOption from "./pages/KnownusOption";


function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // ✅ Check if we are on the Login Page

  return (
    <div className="flex flex-col h-screen">
      {!isLoginPage && <Navbar />} {/* Hide Navbar on Login Page */}
      <div className="flex flex-1">
        {!isLoginPage && <Sidebar />} {/* Hide Sidebar on Login Page */}
        <div className="  flex-1 overflow-auto">
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={<ProtectedRoute element={<AdminDashboard />} />}
            />
            <Route
              path="/aboutus"
              element={<ProtectedRoute element={<AboutPage />} />}
            />
            <Route
              path="/add-option"
              element={<ProtectedRoute element={<AddOptionPage />} />}
            />
            <Route
              path="/knownus"
              element={<ProtectedRoute element={<Knownus />} />}
            />
            <Route
              path="/testimonials"
              element={<ProtectedRoute element={<Testimonial />} />}
            />
            <Route
              path="/testimonialoption"
              element={<ProtectedRoute element={<TestimonialOptionpage />} />}
            />
            <Route
              path="/gallery"
              element={<ProtectedRoute element={<Gallery />} />}
            />
            <Route
              path="/galleryoption"
              element={<ProtectedRoute element={<GalleryOption />} />}
            />
            <Route
              path="/knowusoption"
              element={<ProtectedRoute element={<KnownusOption />} />}
            />
            <Route
              path="/donation"
              element={<ProtectedRoute element={<Donation />} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
