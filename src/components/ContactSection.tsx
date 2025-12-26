import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-slate-940">
      <div className="container-default grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Контакти та запис
          </h2>
          <p className="mb-4 text-sm text-slate-300 md:text-base">
            Пишіть у Telegram або заповнюйте форму – відповім, підкажу по
            вартості та підберемо зручний час.
          </p>

          <div className="mb-6 space-y-2 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-slate-100">Адреса:</span>{" "}
              Мукачево, вул. Прикладна, 1 (район Центр)
            </p>
            <p>
              <span className="font-semibold text-slate-100">Телефон:</span>{" "}
              <Link href="tel:+380000000000" className="text-emerald-400">
                +38 (000) 000-00-00
              </Link>
            </p>
            <p>
              <span className="font-semibold text-slate-100">Telegram:</span>{" "}
              <Link
                href="https://t.me/yourusername"
                className="text-emerald-400"
              >
                @yourusername
              </Link>
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-3 text-xl font-semibold">Форма заявки</h3>
          <form action="/api/contact" method="POST" className="space-y-4">
            <label className="block text-sm">
              <span className="mb-1 inline-block text-slate-200">
                Ім&apos;я
              </span>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1 inline-block text-slate-200">Телефон</span>
              <input
                name="phone"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1 inline-block text-slate-200">
                Що потрібно зробити?
              </span>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500"
                placeholder="Наприклад: прокачка гальм, ТО вилки, повне ТО..."
              />
            </label>

            <a
              href="https://t.me/gaikxs"
              target="_blank"
              rel="noopener noreferrer"
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Надіслати заявку
            </a>

            <p className="text-xs text-slate-400">
              Надсилаючи форму, ви погоджуєтесь на обробку контактних даних
              виключно з метою зв’язку щодо сервісу велосипеда.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
