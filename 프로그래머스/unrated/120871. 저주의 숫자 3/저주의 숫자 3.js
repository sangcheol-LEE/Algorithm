const solution = (num) => {
  let emptyArray = Array.from({length:200}, (_,i) => i + 1)
  let filteredArray = emptyArray.filter((item) => item % 3 !== 0 && !item.toString().includes("3"))
  return filteredArray[num - 1]
}