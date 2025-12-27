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
      </div>
    </section>
  );
}
