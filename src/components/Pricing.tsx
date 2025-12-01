export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-940">
      <div className="container-default">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Орієнтовні ціни
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-base">
          Точну вартість називаю після короткої діагностики. Для постійних
          клієнтів – приємні знижки.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">Прокачка гідравліки</h3>
            <p className="mb-4 text-sm text-slate-300">
              Прокачка одного контура (одна гальмівна ручка + каліпер).
            </p>
            <p className="mb-1 text-2xl font-semibold text-emerald-400">
              від 500 ₴
            </p>
            <p className="text-xs text-slate-400">Рідина оплачується окремо.</p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">ТО повітряно-масляної вилки</h3>
            <p className="mb-4 text-sm text-slate-300">
              Повний розбір, чистка, заміна мастила, витратних матеріалів.
            </p>
            <p className="mb-1 text-2xl font-semibold text-emerald-400">
              від 1500 ₴
            </p>
            <p className="text-xs text-slate-400">
              Вартість сальників/kit – за ціною постачальника.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">Комплексне ТО</h3>
            <p className="mb-4 text-sm text-slate-300">
              Повний огляд велосипеда, регулювання гальм та передач, перевірка
              коліс, рекомендації по заміні вузлів.
            </p>
            <p className="mb-1 text-2xl font-semibold text-emerald-400">
              від 900 ₴
            </p>
            <p className="text-xs text-slate-400">
              Індивідуальний підхід під стиль катання.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
