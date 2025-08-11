// Fibonacci function with using iteration
/* It works ^^
function fibs(n) {
  const fibsArr = []
  if (n <= 0) {
    return fibsArr
  }
  if (n >= 2) {
    fibsArr.push(0)
    fibsArr.push(1)
  } else if (n === 1) {
    fibsArr.push(0)
  }
  for (let i = 2; i < n; i++) {
    const nextValue = fibsArr[i - 2] + fibsArr[i - 1]
    fibsArr.push(nextValue)
  }
  return fibsArr
}

console.log(fibs(7))
*/

// Another fibs function which solves the same problem recursively
/* I add a new parameter to my function as sequence
function fibsRec(n, sequence = [0, 1]) {
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [0]
  }
  if (sequence.length === n) {
    return sequence
  }
  sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1])

  return fibsRec(n, sequence)
}

console.log(fibsRec(8))
*/