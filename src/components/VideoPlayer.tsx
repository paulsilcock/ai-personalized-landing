import { Loader2, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export function VideoPlayer({
  src,
  className = "",
  loop = true,
  muted = true,
  title,
}: {
  src: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  title?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    // Prevent clicks on buttons from triggering video play/pause
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    togglePlayPause();
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    // Show loading icon after 300ms
    loadingTimeoutRef.current = setTimeout(() => {
      setShowLoadingIcon(true);
    }, 300);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setShowLoadingIcon(false);
    // Clear the timeout if it hasn't fired yet
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative group cursor-pointer w-full h-full"
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        className={`w-full h-full object-cover ${className}`}
        onPlay={handlePlay}
        onPause={handlePause}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
      />

      {/* Loading overlay */}
      {showLoadingIcon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Loader2 className="size-8 animate-spin text-white" />
        </div>
      )}

      {/* Play button overlay */}
      {!isPlaying && !isLoading && (
        <>
          {title && (
            <div className="absolute top-3.5 w-full text-white text-center font-medium text-base">
              <span className="px-3 py-1.5 bg-black/50 rounded-md">
                {title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full !w-14 !h-14 !p-0 bg-background/90 dark:bg-background hover:bg-background dark:hover:bg-background/80 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
            >
              <Play className="!size-5 flex-shrink-0" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
