import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Initialize socket connection

const VideoCall = () => {
  const { roomId } = useParams(); // Fetch roomId from the URL
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const peerConnectionRef = useRef(null);

  useEffect(() => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }], // STUN server
    });

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("signal", { roomId, data: { candidate: event.candidate } });
      }
    };

    peerConnection.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    peerConnectionRef.current = peerConnection;

    socket.emit("join-room", { roomId });

    socket.on("signal", async (data) => {
      if (data.sdp) {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
        if (data.sdp.type === "offer") {
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);
          socket.emit("signal", { roomId, data: { sdp: answer } });
        }
      } else if (data.candidate) {
        await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
      }
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
    });

    return () => {
      peerConnection.close();
    };
  }, [roomId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Video Call Room</h1>
      <div className="flex space-x-4">
        <video
          ref={localVideoRef}
          autoPlay
          muted
          className="w-1/2 border border-gray-300 rounded shadow-md"
        />
        {remoteStream && (
          <video
            autoPlay
            className="w-1/2 border border-gray-300 rounded shadow-md"
            srcObject={remoteStream}
          />
        )}
      </div>
    </div>
  );
};

export default VideoCall;
