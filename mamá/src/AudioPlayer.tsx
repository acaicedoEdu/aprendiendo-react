import { useEffect, useRef, useState } from "react";
import audio from "./assets/mama.mp3";

interface Props {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const AudioPlayer: React.FC<Props> = ({isPlaying, setIsPlaying}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    let interval: NodeJS.Timeout;

    if (isPlaying && audio) {
      audio.play();
      interval = setInterval(() => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      }, 500);
    } else {
      audio?.pause();
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex items-center space-x-2">
      <audio
        ref={audioRef}
        src={audio}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
      >
        {isPlaying ? (
          <span className="h-3 w-3 bg-white rounded-sm"></span>
        ) : (
          <span className="h-0 w-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-white ml-0.5"></span>
        )}
      </button>
      <div className="w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
