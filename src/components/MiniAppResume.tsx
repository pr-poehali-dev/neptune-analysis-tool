export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Бренды</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Наша экосистема</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#1A1AFF] pl-4">
              <h4 className="text-xl font-bold">VilongBooks</h4>
              <p className="text-gray-600 font-medium">Книги и образование</p>
              <p className="mt-2">
                Издательский бренд, предлагающий широкий выбор книг — от бестселлеров до
                специализированной литературы. Знания — наш главный продукт.
              </p>
            </div>

            <div className="border-l-[4px] border-[#1A1AFF] pl-4">
              <h4 className="text-xl font-bold">Videluxe</h4>
              <p className="text-gray-600 font-medium">Премиальная электроника</p>
              <p className="mt-2">
                Линейка высококачественных ноутбуков и электронных устройств для работы,
                творчества и повседневной жизни. Производительность без компромиссов.
              </p>
            </div>

            <div className="border-l-[4px] border-[#1A1AFF] pl-4">
              <h4 className="text-xl font-bold">Vilong — и многое другое</h4>
              <p className="text-gray-600 font-medium">Расширяем горизонты</p>
              <p className="mt-2">
                Наша экосистема продолжает расти. Мы выходим в новые сферы, чтобы сделать
                жизнь наших клиентов ещё более насыщенной и удобной.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Ключевые достижения</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Присутствие во всех сферах жизни</h4>
              <p className="text-sm text-gray-600 mb-2">Книги · Электроника · Технологии</p>
              <p>Vilong Company охватывает образование, технологии и стиль жизни одновременно.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Мировое качество</h4>
              <p className="text-sm text-gray-600 mb-2">Стандарты · Надёжность · Инновации</p>
              <p>Каждый продукт Vilong создаётся с вниманием к деталям и с заботой о пользователе.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
