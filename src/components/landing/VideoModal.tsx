import { useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const openCount = useRef(0);

  if (!isOpen) return null;

  // Increment on each render while open — forces iframe remount for autoplay
  openCount.current++;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
          <iframe
            key={openCount.current}
            src={`https://www.youtube.com/embed/YxkGdX4WIBE?autoplay=1&mute=1&rel=0&playsinline=1&t=${openCount.current}`}
            title="Apryl Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
