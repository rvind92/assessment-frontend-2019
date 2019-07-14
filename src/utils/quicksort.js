const swap = (items, leftIndex, rightIndex) => {
  const temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

const partition = (items, left, right, key, value) => {
  const pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    if(key) {
      if(key.includes('Oldest')) {
        while (parseInt(items[i][value]) < parseInt(pivot[value])) {
          i++
        }
        while (parseInt(items[j][value]) > parseInt(pivot[value])) {
          j--
        }
      } else if(key.includes('Newest')) {
        while (parseInt(items[i][value]) > parseInt(pivot[value])) {
          i++
        }
        while (parseInt(items[j][value]) < parseInt(pivot[value])) {
          j--
        }
      } else {
        break
      }
    } else {
      break
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

export const quickSort = (items, left, right, key, value) => {
  let index
  if(!key) return items
  if (items.length > 1) {
    index = partition(items, left, right, key, value)
    if (left < index - 1) {
      quickSort(items, left, index - 1, key, value)
    }
    if (index < right) {
      quickSort(items, index, right, key, value)
    }
  }
  return items
}
