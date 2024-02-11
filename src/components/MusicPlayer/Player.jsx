/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const [source, setSource] = useState('');
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  // determine the sourse of audio
  useEffect(() => {
    console.log(activeSong);
    if (activeSong?.hub?.actions) {
      setSource(activeSong?.hub?.actions[1]?.uri);
    } else if (activeSong?.ringtone) {
      setSource(activeSong?.ringtone);
    } else if (activeSong?.images?.play) {
      setSource(activeSong?.images?.play);
    } else {
      setSource('');
    }
  }, [activeSong]);
  return (
    <audio
      src={source}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
