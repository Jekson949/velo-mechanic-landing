'use client';

import { X } from 'lucide-react';

interface ModalVideoProps {
  videoId: string | null;
  onClose: () => void;
}

export default function ModalVideo({ videoId, onClose }: ModalVideoProps) {
  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      aria-modal="true"
      role="dialog"
    >
      <button
        aria-label="Закрити відео"
        className="absolute right-4 top-4 rounded-full bg-slate-900/80 p-2"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      <div className="aspect-video w-full max-w-3xl">
        <iframe
          className="h-full w-full rounded-2xl border border-slate-800"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Відео з YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
