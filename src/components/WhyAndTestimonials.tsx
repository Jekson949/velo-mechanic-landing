export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-slate-940">
      <div className="container-default grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Чому обирають мене
          </h2>
          <ul className="space-y-3 text-sm text-slate-300 md:text-base">
            <li>• Пояснюю, що роблю з велосипедом і чому це потрібно.</li>
            <li>• Працюю тільки з якісними мастилами та витратниками.</li>
            <li>• Акуратне відношення до байка – як до свого.</li>
            <li>• Допомагаю налаштувати посадку та передачі під тебе.</li>
            <li>• Гарантую чесний підхід без «нав’язаних» послуг.</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold">Фокус на безпеці</h3>
          <p className="mb-3 text-sm text-slate-300">
            Гальма та підвіска – ключ до контролю над велосипедом. Я завжди
            ретельно перевіряю вузли, від яких залежить твоя безпека на спусках
            і в місті.
          </p>
          <p className="text-sm text-slate-300">
            Після сервісу даю короткі рекомендації по догляду – щоб ти розумів,
            коли приходити наступного разу, а коли можна ще покатати.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-slate-950">
      <div className="container-default">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Відгуки клієнтів
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-base">
          Частина відгуків людей, які вже довірили свої велосипеди.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: 'Олег',
              text: 'Після прокачки гальм зник скрип, ручки стали набагато інформативніші. Майстер все пояснив по поличках.'
            },
            {
              name: 'Андрій',
              text: 'Робив повне ТО вилки Fox. Все чітко за термінами, прислали фото в процесі, результатом дуже задоволений.'
            },
            {
              name: 'Марина',
              text: 'Підготували велосипед до веломарафону, налаштували передачі та гальма. Без жодних проблем на дистанції.'
            }
          ].map((r) => (
            <article key={r.name} className="card">
              <p className="mb-3 text-sm text-slate-200">“{r.text}”</p>
              <p className="text-xs font-semibold text-emerald-400">
                {r.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
