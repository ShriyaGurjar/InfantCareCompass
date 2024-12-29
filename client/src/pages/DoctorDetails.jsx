import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";

const DoctorDetails = () => {
  const { id } = useParams(); // Fetch doctor name from the URL
  const navigate = useNavigate();

  const handleStartCall = () => {
    const roomId = Math.random().toString(36).substring(2, 15); // Generate a unique room ID
    navigate(`/consultation/video-call/${roomId}`); // Navigate to VideoCall page
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctor Details for: {id}</h2>
      <span
        className="text-blue-700 text-3xl cursor-pointer"
        onClick={handleStartCall}
      >
        <FaVideo />
      </span>
    </div>
  );
};

export default DoctorDetails;
