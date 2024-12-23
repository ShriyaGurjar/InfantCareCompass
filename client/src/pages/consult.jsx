import React from "react";
import { Link, Outlet } from "react-router-dom"; 

const doctors = [
  {
    name: "Dr. John Doe",
    about: "Experienced general practitioner with a focus on family medicine.",
    experience: 12,
    rating: 4.8,
  },
  {
    name: "Dr. Jane Smith",
    about: "Specialist in pediatrics with a warm approach to children.",
    experience: 8,
    rating: 4.7,
  },
  {
    name: "Dr. Alice Brown",
    about: "Cardiologist with expertise in heart disease prevention.",
    experience: 15,
    rating: 4.9,
  },
];

const ConsultationPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Doctors</h2>
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index} className="mb-4">
              <Link
                to={`/consultation/doctordetail/${doctor.name}`}
                className="block p-4 border rounded hover:bg-gray-100"
              >
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.about}</p>
                <p className="text-sm">Experience: {doctor.experience} years</p>
                <p className="text-sm">Rating: {doctor.rating}⭐</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ConsultationPage;
