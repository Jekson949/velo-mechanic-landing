"use client";

import React from "react";

function extractVideoId(url: string): string | null {
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];

  const shortUrl = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortUrl) return shortUrl[1];

  const watchUrl = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchUrl) return watchUrl[1];

  return null;
}

export default function YoutubeShorts() {
  const shorts = [
    {
      url: "https://www.youtube.com/shorts/hKRL41FLaxg",
      title: "DT Swiss 240 #mtb #shorts #dtswiss",
    },
    {
      url: "https://www.youtube.com/shorts/LeWuPtnzXjY",
      title: "Fox 36 Service #mtb #fork",
    },
    {
      url: "https://www.youtube.com/shorts/dCLG2qWs-AU",
      title: "SRAM GX #mtb #downhill",
    },
  ];

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
          {shorts.map((item, i) => {
            const id = extractVideoId(item.url);
            if (!id) return null;

            return (
              <article
                key={i}
                className="
                  overflow-hidden rounded-2xl border border-slate-800 
                  bg-slate-900 flex flex-col p-0   /* УБИРАЕМ PADDING */
                "
              >
                <div className="relative aspect-[9/16] bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="border-t border-slate-800 px-3 py-2">
                  <p className="text-sm text-slate-100 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
