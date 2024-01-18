import React, { useState, useEffect } from 'react';
import './Song.css';
import audio1 from './gsong.mp3'

const Song = () => {
  const [audio] = useState(new Audio(audio1));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMetadataLoaded, setIsMetadataLoaded] = useState(false);

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleMetadataLoaded);

        await audio.load();
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initializeAudio();

    // Cleanup function
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
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

  const handleMetadataLoaded = () => {
    setIsMetadataLoaded(true);
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
      <h2 className="song-title">Play it aloud!</h2>
      <button className="play-button" onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max={isMetadataLoaded ? audio.duration : 0}
          step="0.1"
          value={currentTime}
          onChange={handleSliderChange}
          className="slider"
        />
        <p className="time-info">
          {formatTime(currentTime)} / {formatTime(isMetadataLoaded ? audio.duration : 0)}
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
