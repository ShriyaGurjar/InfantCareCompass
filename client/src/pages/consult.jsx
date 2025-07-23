import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import commnApiEndpoint from "../common/backendAPI.jsx";
import { User, Star, Stethoscope } from "lucide-react";

const ConsultationPage = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const doctorInfo = async () => {
      try {
        const response = await fetch(commnApiEndpoint.doctorInfo.url, {
          method: "GET",
        });
        const data = await response.json();
        setDoctorData(data.data);
        console.log("doctor details:", data.data);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    doctorInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 overflow-hidden relative">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Meet Our Pediatric Experts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorData.map((doctor, index) => (
            <Link
              key={index}
              to={`/consultation/doctordetail/${doctor._id}`}
              className="group relative p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600/30 p-3 rounded-xl">
                  <User className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h3>
              </div>

              {/* About */}
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                {doctor.about}
              </p>

              {/* Meta Info */}
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span className="flex items-center gap-1">
                  <Stethoscope className="w-4 h-4" /> {doctor.experience} yrs
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />{" "}
                  {doctor.rating ?? 4.5}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Outlet for nested doctor detail */}
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
