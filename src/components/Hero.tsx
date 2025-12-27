import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="container-default flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-emerald-400">
            Веломайстерня • Мукачево
          </p>
          <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Професійний <span className="text-emerald-400">веломеханік</span>{" "}
            для твого байка
          </h1>
          <p className="mb-6 max-w-xl text-sm text-slate-300 md:text-base">
            Прокачка гідравлічних гальм, повне ТО повітряно-масляної вилки,
            ремонт та налаштування велосипедів будь-якого рівня. Працюю
            акуратно, детально пояснюю, даю рекомендації по догляду.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="https://t.me/gaikxs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Записатися на сервіс
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 hover:border-emerald-500 hover:text-emerald-300"
            >
              Дивитись послуги
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="card">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Основні послуги
            </p>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>• Прокачка та налаштування гідравлічних гальм</li>
              <li>
                • Повне ТО повітряно-масляної вилки (заміна мастил, сальників)
              </li>
              <li>• Регулювання перемикачів, гальм, підбір трансмісії</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Орієнтовний час сервісу: від 1 до 3 годин в залежності від
              навантаження. Можливий терміновий ремонт за домовленістю.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
