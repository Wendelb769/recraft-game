import type { Item } from "../types/item.types"

interface ItemCardProps {
  item: Item
  onClick: () => void
}

export function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-700 transition p-4 rounded-xl border border-slate-600 w-40"
    >
      <h2 className="text-lg font-semibold">
        {item.name}
      </h2>

      <p className="text-sm text-slate-400 mt-2 capitalize">
        {item.category}
      </p>
    </button>
  )
}