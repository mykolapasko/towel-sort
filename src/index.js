module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  let result = []
  for (let index = 0; index < matrix.length; index++) {
    if (index % 2 === 0) {
      matrix[index].sort((a, b) => a - b)
      matrix[index].forEach(item => result.push(item))
    } else {
      matrix[index].sort((a, b) => b - a)
      matrix[index].forEach(item => result.push(item))
    }
  }
  return result
}



