export type YoutubeVideo = {
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
};

const YT_API_KEY = process.env.YOUTUBE_API_KEY;
const YT_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

if (!YT_API_KEY) {
  console.warn('YOUTUBE_API_KEY is not set');
}
if (!YT_CHANNEL_ID) {
  console.warn('YOUTUBE_CHANNEL_ID is not set');
}

export async function getYoutubeVideos(limit = 6): Promise<YoutubeVideo[]> {
  if (!YT_API_KEY || !YT_CHANNEL_ID) return [];

  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('key', YT_API_KEY);
  url.searchParams.set('channelId', YT_CHANNEL_ID);
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('order', 'date');
  url.searchParams.set('maxResults', String(limit));
  url.searchParams.set('type', 'video');

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    console.error('Failed to fetch Youtube videos', await res.text());
    return [];
  }

  const data = await res.json();

  return (data.items || []).map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnailUrl: item.snippet.thumbnails.medium?.url,
    publishedAt: item.snippet.publishedAt
  }));
}
