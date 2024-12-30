import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import axios from "axios";
import AgoraRTC from "agora-rtc-sdk-ng";

const DoctorDetails = () => {
  const { id } = useParams(); // Fetch doctor ID from the URL
  const [channelName, setChannelName] = useState("");
  const [rtcClient, setRtcClient] = useState(null);

  const handleStartCall = async () => {
    try {
      // Step 1: Generate Agora Token
      const uid = Math.floor(Math.random() * 10000); // Generate a random UID
      const response = await axios.post("http://localhost:3000/api/generate-token", {
        channelName: `call_${id}`, // Channel name tied to the doctor ID
        uid,
      });

      const { token } = response.data;

      // Step 2: Initialize Agora Client and Join Channel
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      setRtcClient(client);

      await client.join(process.env.REACT_APP_AGORA_APP_ID, `call_${id}`, token, uid);

      // Publish the local video and audio stream
      const localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
      await client.publish(localTracks);

      alert("Call started! Doctor will be notified via email.");
      setChannelName(`call_${id}`);

      // Step 3: Notify the Doctor via Email
      await axios.post("http://localhost:3000/api/notify-doctor", {
        doctorId: id,
        channelName: `call_${id}`,
      });
    } catch (error) {
      console.error("Failed to start the call:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctor Details for: {"Dr. " + id}</h2>
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
