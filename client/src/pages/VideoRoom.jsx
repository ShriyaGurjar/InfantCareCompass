import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoRoom = () => {
  const { roomId } = useParams(); // Fetch the room ID from the URL

  const myMeeting = async(element) =>{
    const appID =1098195219 ;
    const serverSecret = "2c9ec74b0621ac4d37070ec44ed960bb";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'Enter your name')
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container:element,
      scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall,
      }
    })
  };

 

  return (
    <div className=" flex justify-center items-center py-2 ">
      <div className="w-9/12" ref={myMeeting} />
    </div>
  );
};

export default VideoRoom;
