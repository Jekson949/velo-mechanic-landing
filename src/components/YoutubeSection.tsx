'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import type { YoutubeVideo } from '@/lib/getYoutubeVideos';
import ModalVideo from './ModalVideo';

interface YoutubeSectionProps {
  videos: YoutubeVideo[];
}

export default function YoutubeSection({ videos }: YoutubeSectionProps) {
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);

  if (!videos.length) {
    return null;
  }

  return (
    <section id="video" className="section-padding bg-slate-950">
      <div className="container-default">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Відео з YouTube
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-base">
          Огляди робіт, корисні поради з обслуговування велосипедів та розбір
          типових помилок.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 text-left shadow-lg"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 shadow-lg">
                    <Play className="ml-0.5 h-6 w-6" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-medium text-slate-50">
                  {video.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ModalVideo videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
