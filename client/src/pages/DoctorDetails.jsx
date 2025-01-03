import React, { useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaVideo } from "react-icons/fa";

const DoctorDetails = () => {
  const { id } = useParams(); // Fetch doctor ID from the URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleJoinRoom = useCallback(async () => {
    console.log("Navigating to room with ID:", id);
    setLoading(true);

    try {
      // Notify the doctor
      const response = await fetch("http://localhost:3000/api/notify-doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: id,
          roomId: `http://localhost:5173/room/${id}`,
        }),
      });

      if (response.ok) {
        console.log("Notification sent successfully.");
      } else {
        const errorData = await response.json();
        console.error("Error notifying doctor:", errorData);
      }

      // Navigate to the room
      navigate(`/room/${id}`);
    } catch (error) {
      console.error("Error in notifying doctor or navigating:", error);
    } finally {
      setLoading(false);
    }
  }, [navigate, id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctor Details for: {"Dr. " + id}</h2>
      <span
        className="text-blue-700 text-3xl cursor-pointer"
        onClick={handleJoinRoom}
      >
        {loading ? "Starting Call..." : <FaVideo />}
      </span>
    </div>
  );
};

export default DoctorDetails;
