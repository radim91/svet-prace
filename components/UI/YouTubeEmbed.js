import { useState } from "react";
import Image from "next/image";

const YouTubeEmbed = ({ src, title, width, height, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube embed or watch URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(src);

  if (!videoId) {
    // Fallback to standard iframe if we cannot parse the video ID
    return (
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={className}
      ></iframe>
    );
  }

  // Create privacy-friendly nocookie URL with autoplay enabled when clicked
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  if (isPlaying) {
    return (
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={className}
        loading="lazy"
      ></iframe>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className={`relative cursor-pointer group rounded overflow-hidden mx-auto mt-4 bg-black flex items-center justify-center`}
      style={{
        width: width === "100%" ? "100%" : `${width}px`,
        maxWidth: "100%",
        aspectRatio: "560/315",
        height: width === "100%" ? "auto" : `${height}px`,
      }}
    >
      <Image
        src={thumbnailUrl}
        alt={title || "YouTube video preview"}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-300 group-hover:scale-102 transition-transform duration-300"
      />
      {/* Play Button Icon Overlay */}
      <div className="z-10 w-16 h-16 bg-red-600 group-hover:bg-red-700 transition-colors duration-200 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-8 h-8 text-white fill-current ms-1" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
