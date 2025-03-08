import React, { useState } from "react";
import { useAuthActions } from "../context/useAuthAction";
import loginbg from "../assets/loginbg.jpeg";
import loginvector from "../assets/loginvector.png";
import logo from "../assets/logo.png";
import loginsvg from "../assets/loginsvg.png"; // Ensure this path is correct

const Login = () => {
  const { handleLogin } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      handleLogin();
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div
      className="py-10 flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left-side Images */}
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <img
          src={loginvector}
          alt="Decorative Vector"
          className="absolute bottom-0 left-0 w-full h-full object-cover"
        />
        <img
          src={loginsvg}
          alt="SVG Decoration"
          className="absolute top-0 right-65  rotate-135 w-200"
        />
      </div>

      {/* Welcome Text */}
      <div className="relative text-center text-3xl md:mt-6 mt-6 md:text-6xl font-bold">
        <p className="text-white drop-shadow-md">Welcome to</p>
        <p id="logintext" className="text-white italic">
          Go-seva
        </p>
      </div>

      {/* Login Form */}
      <div
        className="bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-2xl w-full mt-6"
        id="textlogin"
        style={{ boxShadow: "inset 4px 4px 10px 4px rgba(255, 255, 255, 0.5)" }}
      >
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/20 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/20 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="absolute right-8 text-white">Forget password?</p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 mt-16 bg-gradient-to-tl from-[#089803] to-[#153B16] hover:bg-green-600 text-white py-2 px-4 rounded-md transition-all"
            >
              Login
            </button>
          </div>

          <p className="text-center text-white mt-8 text-sm">
            Don't have an account?{" "}
            <a href="#" className=" hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
