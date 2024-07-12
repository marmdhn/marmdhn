"use client";

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong] = useState({
    title: "Jaa ne, Mata ne",
    artist: "Riria",
    audioSrc: "/music/audio.mp3",
    startTime: 7,
  });

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        if ("currentTime" in audioRef.current) {
          audioRef.current.currentTime = currentSong.startTime;
        }
        if ("play" in audioRef.current) {
          audioRef.current.play();
        }
      } else {
        if ("pause" in audioRef.current) {
          audioRef.current.pause();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      if ("volume" in audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="text-center">
        <span className="text-gray-800 dark:text-white font-semibold">
          {currentSong.title}
        </span>
        <p className="text-gray-500 dark:text-gray-400">{currentSong.artist}</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <button
          onClick={togglePlay}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isPlaying ? (
            <FaPause className="text-xl text-gray-800 dark:text-white" />
          ) : (
            <FaPlay className="text-xl text-gray-800 dark:text-white" />
          )}
        </button>
        <div className="flex flex-wrap gap-4">
          <FaVolumeDown className="text-gray-800 dark:text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="slider"
            id="volumeRange"
          />
          <FaVolumeUp className="text-gray-800 dark:text-white ms-auto" />
        </div>
      </div>
      <audio ref={audioRef} src={currentSong.audioSrc}></audio>
    </div>
  );
}
