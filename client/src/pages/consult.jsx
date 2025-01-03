import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom"; 
import commnApiEndpoint from '../common/backendAPI.jsx';

const ConsultationPage = () => {
  const [doctorData, setDoctorData] = useState([]); // Initialize as an empty array

  const doctorInfo = async () => {
    try {
      const response = await fetch(commnApiEndpoint.doctorInfo.url, {
        method: 'GET',
      });
      const data = await response.json(); // Parse the response
      setDoctorData(data.data); // Update state with fetched data
      console.log("doctor details:", data.data);
      
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  useEffect(() => {
    doctorInfo();
  }, []); // Fetch data only once on component mount

  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Doctors</h2>
        <ul>
          {doctorData.map((doctor, index) => ( // Iterate over doctorData
            <li key={index} className="mb-4">
              <Link
                to={`/consultation/doctordetail/${doctor?._id}`}
                className="block p-4 border rounded hover:bg-gray-100"
              >
                <h3 className="font-semibold text-lg">{"Dr. "+doctor.firstName + " " +doctor.lastName}</h3>
                <p className="text-sm text-gray-500">{doctor.about}</p>
                <p className="text-sm">Experience: {doctor.experience} years</p>
                <p className="text-sm">Rating: {doctor.rating}4.5⭐</p>
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
