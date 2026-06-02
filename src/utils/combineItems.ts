export function combineItems(
  itemA: string,
  itemB: string,
  combinations: Record<string, string>
) {
  const key1 = `${itemA}+${itemB}`
  const key2 = `${itemB}+${itemA}`

  return combinations[key1] || combinations[key2] || null
}