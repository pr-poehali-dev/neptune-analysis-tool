export function MiniAppWritings() {
  const posts = [
    {
      title: "Vilong выходит на рынок электроники",
      date: "Мар 2026",
      excerpt:
        "Встречайте Videluxe — линейку премиальных ноутбуков от Vilong Company. Мощность, стиль и доступность в одном устройстве.",
    },
    {
      title: "VilongBooks: новая коллекция книг",
      date: "Фев 2026",
      excerpt: "Пополнение каталога VilongBooks: сотни новых изданий по технологиям, бизнесу и саморазвитию уже доступны.",
    },
    {
      title: "Vilong Company: стратегия на 2026 год",
      date: "Янв 2026",
      excerpt: "Мы продолжаем расширять экосистему. Новые бренды, новые рынки и новые возможности для наших клиентов.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Новости</h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{post.title}</h3>
              <span className="text-sm font-bold bg-[#1A1AFF] text-white px-2 py-1 border-[2px] border-black whitespace-nowrap ml-2">
                {post.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#1A1AFF] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все новости
        </button>
      </div>
    </div>
  )
}
