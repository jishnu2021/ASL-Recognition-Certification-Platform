import React, { useState } from 'react';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';

const CourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState('https://youtu.be/XMKg-8OZRGQ?si=L95k6DsMAP1ES6kf');

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4"> 
        <Sidebar onVideoSelect={handleVideoSelect} />
      </div>
      <div className="w-3/4 p-4"> 
        <VideoPlayer videoUrl={selectedVideo} />
      </div>
    </div>
  );
};

export default CourseContent;
