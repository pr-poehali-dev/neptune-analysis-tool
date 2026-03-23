export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">О компании</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Vilong Company — везде, где вы живёте</h3>
          <p className="text-lg leading-relaxed mb-4">
            Мы создаём экосистему брендов, которая охватывает все сферы жизни современного человека.
            От интеллектуального развития до высоких технологий — Vilong всегда рядом.
          </p>
          <p className="text-lg leading-relaxed">
            Наша миссия — создавать продукты мирового уровня, доступные каждому. Мы верим, что
            качество не должно быть привилегией избранных.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Наши ценности</h3>
          <div className="flex flex-wrap gap-2">
            {["Инновации", "Качество", "Доступность", "Технологии", "Образование", "Дизайн", "Экосистема", "Развитие"].map(
              (value) => (
                <span
                  key={value}
                  className="bg-[#1A1AFF] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {value}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
