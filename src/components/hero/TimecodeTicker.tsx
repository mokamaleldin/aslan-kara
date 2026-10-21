import React, { useState, useEffect } from 'react';

interface TimecodeTickerProps {
  className?: string;
  fps?: number;
}

export const TimecodeTicker: React.FC<TimecodeTickerProps> = ({
  className = '',
  fps = 24
}) => {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames((prev) => (prev + 1) % (fps * 60 * 60)); // Loops through an hour
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [fps]);

  const f = frames % fps;
  const totalSeconds = Math.floor(frames / fps);
  const s = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const m = totalMinutes % 60;
  const h = Math.floor(totalMinutes / 60);

  const pad = (n: number) => n.toString().padStart(2, '0');
  const timecodeStr = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;

  return (
    <span className={`timecode tracking-wider select-none ${className}`}>
      {timecodeStr}
    </span>
  );
};
