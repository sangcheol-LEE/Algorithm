function solution(initialNumber) {
    const answer = [];
    let forDivideNumber = 2;
    
    while(initialNumber !== 1) {
        if(initialNumber % forDivideNumber === 0) {
            answer.push(forDivideNumber)
            initialNumber = initialNumber / forDivideNumber;
            forDivideNumber = 2;
        } else {
            forDivideNumber++
        }
    }
    
    let ret = [...new Set(answer.sort((a,b) => a - b))];
    
    return ret;
}