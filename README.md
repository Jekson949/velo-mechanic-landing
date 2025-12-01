# Лендінг веломеханіка (Next.js 14 + Tailwind)

Односторінковий сайт для веломеханіка з фокусом на швидкість, SEO та довіру.

## Стек

- Next.js 14 (App Router, SSR)
- TypeScript
- TailwindCSS
- Metadata API
- next/image оптимізація
- Sitemap + robots.txt
- Вбудований YouTube блок (YouTube Data API)
- Formspree форма

## Встановлення та запуск

1. Скачай архів з проєктом та розпакуй, наприклад у папку:

   ```bash
   velo-mechanic-landing
   ```

2. Перейди в папку проєкту:

   ```bash
   cd velo-mechanic-landing
   ```

3. Встанови залежності (потрібен Node.js 18+):

   ```bash
   npm install
   ```

4. Створи файл `.env.local` на основі `.env.example`:

   ```bash
   cp .env.example .env.local
   ```

   Заповни значення:

   - `YOUTUBE_API_KEY` – API ключ з Google Cloud Console для YouTube Data API v3
   - `YOUTUBE_CHANNEL_ID` – ID твого YouTube каналу

5. Запусти дев-сервер:

   ```bash
   npm run dev
   ```

   Відкрий у браузері: http://localhost:3000

6. Для продакшн збірки:

   ```bash
   npm run build
   npm start
   ```

## Налаштування під себе

- Замінити домен `velo-mechanic.example.com` у файлах:
  - `src/app/layout.tsx`
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
  - `src/app/page.tsx` (в JSON-LD)
- Підставити:
  - Справжню адресу майстерні та телефон
  - Посилання на Telegram
  - Свій `Formspree` endpoint у `ContactSection.tsx`
- Замінити фото в `Gallery.tsx` на свої.

## Lighthouse

Для максимальних показників:

- Деплой на Vercel (рекомендовано).
- Слідкувати, щоб зображення були оптимального розміру.
- При потребі прибрати зайві зовнішні скрипти.

