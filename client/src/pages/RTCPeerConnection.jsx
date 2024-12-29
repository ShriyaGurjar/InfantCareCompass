import React from "react";
import { useNavigate } from "react-router-dom";

const RTCPeerConnection = () => {
  const navigate = useNavigate();

  const handleStartCall = () => {
    const roomId = Math.random().toString(36).substring(2, 15); // Generate a unique room ID
    navigate(`/consultation/video-call/${roomId}`); // Navigate to the VideoCall route
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Consultation Page</h1>
      <p className="mt-2 text-gray-600">
        Welcome! Start a video consultation by clicking the button below.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={handleStartCall}
      >
        Start Video Call
      </button>
    </div>
  );
};

export default RTCPeerConnection;
