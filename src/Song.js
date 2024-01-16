// Song.js

import React, { useState, useEffect } from 'react';
import './Song.css';

const Song = () => {
  const [audio] = useState(new Audio('/song.mp3')); // Replace with the actual path to your audio file
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  return (
    <div className="song-container">
      <h2 className="song-title">Play it aloud !</h2>
      <button className="play-button" onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max={audio.duration}
          step="0.1"
          value={currentTime}
          onChange={handleSliderChange}
          className="slider"
        />
        <p className="time-info">
          {formatTime(currentTime)} / {formatTime(audio.duration)}
        </p>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default Song;
