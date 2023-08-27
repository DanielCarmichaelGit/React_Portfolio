import React, { useRef, useState, useEffect } from "react";
import "../../css/MusicPlayer.css"; // For the CSS

// Material UI imports
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Typography from "@mui/material/Typography";

//import music files
import trackOne from "../../audio/night-in-kyoto-avbe-main-version-21302-01-57.mp3";
import trackTwo from "../../audio/silent-wood.mp3";
import trackThree from "../../audio/Sleepless.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.02); // 0.2 is 2% of max volume
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const songs = [trackOne, trackTwo, trackThree];
  const credits = [
    {
      link: "https://uppbeat.io/t/avbe/night-in-kyoto",
      creator: "AVBE",
    },
    {
      link: "https://purrplecat.com/",
      creator: "Purple Cat",
    },
    {
      link: "https://purrplecat.com/",
      creator: "Purple Cat",
    },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const rewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const forward = () => {
    audioRef.current.currentTime += 10;
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    audioRef.current.volume = volume;
    audioRef.current.play().catch((error) => {
      console.error("Playback failed due to:", error);
    });
  }, [volume, currentSongIndex]);

  const handleSongEnd = () => {
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextSongIndex);
  };

  return (
    <div className={`player-container ${isCollapsed ? "collapsed" : ""}`}>
      {/* Music Controls */}
      <div className="controls">
        <Button
          variant="text"
          style={{
            color: "black",
            backgroundColor: "transparent",
            borderColor: "none",
            borderRadius: "30px",
            height: "60px",
            width: "50px",
          }}
          onClick={rewind}
        >
          {<FastRewindIcon />}
        </Button>
        <Button
          variant="text"
          style={{
            color: "palegreen",
            backgroundColor: "white",
            borderColor: "palegreen",
            borderRadius: "30px",
            height: "60px",
            width: "50px",
          }}
          onClick={togglePlay}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <Button
          variant="text"
          style={{
            color: "black",
            backgroundColor: "transparent",
            borderColor: "none",
            borderRadius: "30px",
            height: "60px",
            width: "50px",
          }}
          onClick={forward}
        >
          {<FastForwardIcon />}
        </Button>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        onEnded={handleSongEnd}
        autoPlay
      />

      {/* Volume and Mute Controls */}
      <div className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div className="player-controls">
        <Typography>Visit the creator below</Typography>
        <Button variant="text" style={{color: 'black'}} onClick={toggleMute}>
          {isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </Button>
      </div>

      {/* Credits */}
      <div className="credits">
        Created by:
        <Link
          href={credits[currentSongIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {credits[currentSongIndex].creator} <OpenInNewIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
}

export default MusicPlayer;
