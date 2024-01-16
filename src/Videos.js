import React from 'react';
import video1 from './harshiiii/video1.mp4';
import video2 from './harshiiii/video2.mp4';
import video3 from './harshiiii/video3.mp4';
import video4 from './harshiiii/video4.mp4';
import video5 from './harshiiii/video5.mp4';
import video6 from './harshiiii/video6.mp4';
import video7 from './harshiiii/video7.mp4';
import video8 from './harshiiii/video8.mp4';
import video9 from './harshiiii/video9.mp4';
import video10 from './harshiiii/video10.mp4';
import video11 from './harshiiii/video11.mp4';
import video12 from './harshiiii/video12.mp4';
import video13 from './harshiiii/video13.mp4';
import video14 from './harshiiii/video14.mp4';
import video15 from './harshiiii/video15.mp4';
import video16 from './harshiiii/video16.mp4';
import video17 from './harshiiii/video17.mp4';
import video18 from './harshiiii/video18.mp4';
import video19 from './harshiiii/video19.mp4';
import video20 from './harshiiii/video20.mp4';
// Import other videos similarly

const Videos = () => {
  const videoSources = [video1, video2,video3,video4,video5,video6,video7,video8,video9,video10,video11,video12,video13,video14,video15,video16,video17,video18,video19,video20]; // Add other video imports here

  return (
    <div>
      <h2>Uploaded Videos</h2>
      <div className="video-container">
        {videoSources.map((videoSrc, index) => (
          <video key={index} controls width="335" height="400">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Videos;
