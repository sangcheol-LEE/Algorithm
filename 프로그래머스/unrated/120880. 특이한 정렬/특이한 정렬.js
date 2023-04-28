const solution = (numlist, n) => {
  return numlist.sort((a,b) => {
    const [retA, retB] = [Math.abs(a - n), Math.abs(b - n)]
    if(retA === retB) return b - a
      return retA - retB
  })
}