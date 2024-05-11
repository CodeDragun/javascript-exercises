const sumAll = function(startSum, endSum) {
    let finalSum = 0 ;
    
    if ( Number(startSum) !== startSum || Number(endSum) !== endSum){
        return "ERROR";
    }
    
    if (startSum < 0 || endSum < 0){
        return "ERROR";
    }

    if (startSum > endSum){
        let temp;
        temp = startSum;
        startSum = endSum;
        endSum = temp;
    }
     
   

    for  (let i = startSum; i <= endSum; i++){
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
