function solution(score) {
   let average = [...score].map((item) => {
     return (item[0] + item[1]) / item.length  
   })
   
   let sorted = [...average].sort((a,b) => b - a)
   
   let ret = average.map((item) => sorted.indexOf(item) + 1)  
       
   return ret
}