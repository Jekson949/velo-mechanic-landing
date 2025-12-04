"use client";

import React, { useState } from "react";

function extractVideoId(url: string): string | null {
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];

  const shortUrl = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortUrl) return shortUrl[1];

  const watchUrl = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchUrl) return watchUrl[1];

  return null;
}

type ShortItem = {
  url: string;
  title: string;
};

const shorts: ShortItem[] = [
  {
    url: "https://www.youtube.com/shorts/XH5PUWi1lTU",
    title: "Sram guide ultimate 🔥 #mtb #service #downhillmtb",
  },
  {
    url: "https://www.youtube.com/shorts/LeWuPtnzXjY",
    title: "Fox 36 Service #mtb #fork",
  },
  {
    url: "https://www.youtube.com/shorts/BLZnoXCFMMQ",
    title: "Good👌🏻 #shimano #shimanoxtr#sram #shimanoxt #mtb #service",
  },
];

function ShortCard({ item }: { item: ShortItem }) {
  const id = extractVideoId(item.url);
  const [playing, setPlaying] = useState(false);

  if (!id) return null;

  return (
    <article
      className="
        overflow-hidden rounded-2xl border border-slate-800 
        bg-slate-900 flex flex-col p-0
      "
    >
      {/* Превью / видео */}
      <div
        className="relative aspect-[9/16] bg-black cursor-pointer group"
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {/* Лёгкая превью-картинка вместо сразу iframe */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Красивая кнопка Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-black/70 flex items-center justify-center group-hover:bg-black/80 transition">
                <div className="ml-1 h-0 w-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white border-r-0" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Подпись снизу, как под фотками */}
      <div className="border-t border-slate-800 px-3 py-2">
        <p className="text-sm text-slate-100 line-clamp-2">{item.title}</p>
      </div>
    </article>
  );
}

export default function YoutubeShorts() {
  return (
    <section
      id="shorts"
      className="section-padding bg-slate-950 text-slate-100"
    >
      <div className="container-default">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Короткі відео (Shorts)
        </h2>

        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-base">
          Вибрані короткі відео з YouTube.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shorts.map((item) => (
            <ShortCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
