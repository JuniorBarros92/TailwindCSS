import { useEffect, useState } from 'react';

export default function ClimaVideo() {
  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    const random = Math.floor(Math.random() * 10) + 20;
    setVideoSrc(random < 25 ? '/img/video_chuva.mp4' : '/img/video_sol.mp4');
  }, []);

  if (!videoSrc) return null;

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover z-0 animate-fade-in"
      autoPlay
      muted
      loop
      playsInline
      src={videoSrc}
    />
  );
}
