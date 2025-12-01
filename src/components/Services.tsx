export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-950">
      <div className="container-default">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Послуги веломеханіка
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-slate-300 md:text-base">
          Працюю з гідравлікою, повітряно-масляними вилками, повним сервісом
          велосипедів: від міських до трейлових та ендуро.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">Гідравлічні гальма</h3>
            <p className="mb-3 text-sm text-slate-300">
              Прокачка, заміна гальмівної рідини, вирівнювання роторів,
              налаштування ходу ручок, усунення скрипів.
            </p>
            <p className="text-xs text-slate-400">Dot / Mineral, будь-які бренди.</p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">ТО повітряно-масляної вилки</h3>
            <p className="mb-3 text-sm text-slate-300">
              Базове та повне обслуговування: чистка, заміна мастила, сальників,
              перевірка тиску, оновлення налаштувань.
            </p>
            <p className="text-xs text-slate-400">
              Fox, RockShox, SR Suntour та інші.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold">Ремонт та налаштування</h3>
            <p className="mb-3 text-sm text-slate-300">
              Регулювання перемикачів, заміна тросів і рубашок, ланцюга, касети,
              налаштування коліс, діагностика та профілактика.
            </p>
            <p className="text-xs text-slate-400">
              Готуємо велосипед до сезону або змагань.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
