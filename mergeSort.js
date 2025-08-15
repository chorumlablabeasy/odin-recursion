const arr1 = [3, 2, 1, 13, 8, 5, 0, 1]
const arr2 = [105, 79, 100, 110]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const indexOfMiddle = Math.ceil(arr.length / 2)
  const arrLeft = mergeSort(arr.slice(0, indexOfMiddle))
  const arrRight = mergeSort(arr.slice(indexOfMiddle))

  return merge(arrLeft, arrRight)
}

function merge(arrLeft, arrRight) {
  const result = []
  let i = 0
  let j = 0

  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      result.push(arrLeft[i])
      i++
    } else {
      result.push(arrRight[j])
      j++
    }
  }

  return result.concat(arrLeft.slice(i)).concat(arrRight.slice(j))
}

console.log(mergeSort(arr1))
console.log(mergeSort(arr2))

