import { useState } from "react"
import combinations from "../data/combinations/combinations.json"
import { combineItems } from "../utils/combineItems"

export function useCrafting() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)

  function selectItem(itemId: string) {
    if (selectedItems.length >= 2) {
      setSelectedItems([itemId])
      setResult(null)
      return
    }

    const updatedItems = [...selectedItems, itemId]
    setSelectedItems(updatedItems)

    if (updatedItems.length === 2) {
      const combinationResult = combineItems(
        updatedItems[0],
        updatedItems[1],
        combinations
      )

      setResult(combinationResult)
    }
  }

  return {
    selectedItems,
    result,
    selectItem,
  }
}