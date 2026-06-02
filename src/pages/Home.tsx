import itemsData from "../data/items/items.json"
import { ItemCard } from "../components/ItemCard"
import { useCrafting } from "../hooks/useCrafting"
import type { Item } from "../types/item.types"

const items = itemsData as Item[]

export function Home() {
  const { selectedItems, result, selectItem } = useCrafting()

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8">
        RECraft
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() => selectItem(item.id)}
          />
        ))}
      </div>

      <div className="mt-10 bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Combinação Atual
        </h2>

        <p>Itens selecionados:</p>

        <div className="flex gap-2 mt-2">
          {selectedItems.map((item) => (
            <span
              key={item}
              className="bg-green-500 text-black px-3 py-1 rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Resultado:
          </h3>

          {result ? (
            <p className="text-green-400 text-lg mt-2">
              {result}
            </p>
          ) : (
            <p className="text-slate-400 mt-2">
              Nenhuma combinação encontrada.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}