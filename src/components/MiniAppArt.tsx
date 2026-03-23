export function MiniAppArt() {
  const products = [
    { title: "VilongBooks", category: "Книги и образование", year: "2020" },
    { title: "Videluxe", category: "Премиальные ноутбуки", year: "2023" },
    { title: "Vilong Home", category: "Товары для дома", year: "2021" },
    { title: "Vilong Sport", category: "Спорт и здоровье", year: "2022" },
    { title: "Vilong Style", category: "Мода и аксессуары", year: "2024" },
    { title: "Vilong Digital", category: "Цифровые сервисы", year: "2025" },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Продукты</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-[#1A1AFF] to-[#6B6BFF] border-b-[3px] border-black flex items-center justify-center">
              <span className="text-white font-black text-2xl tracking-tight">{product.title.split(" ")[0].replace("Vilong", "V")}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{product.category}</p>
              <p className="text-sm font-bold">с {product.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#1A1AFF] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все продукты
        </button>
      </div>
    </div>
  )
}
