import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="bg-black flex justify-center items-center" style={{ width: '360%', marginTop: 0, paddingTop: 0,height:'70vh'}}>
      <ReactPlayer controls={true} url={videoUrl} width="100%" height="100%" />
    </div>
  );
}

export default VideoPlayer;
