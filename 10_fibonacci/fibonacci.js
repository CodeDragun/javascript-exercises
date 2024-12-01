const fibonacci = function(index) {
    
    if(typeof index === 'string' ){
        parseInt(index)
      }
    if(index == 0){
        return 0
    }
    if(index < 0){
        return "OOPS"
    }

  let firstNumber = 1;
  let prevNumber = 0; 
  let currentNum;
  for(let i = 2; i <= index; i++ ){
    currentNum = firstNumber + prevNumber;
    prevNumber = firstNumber;
    firstNumber = currentNum;
  }
  return firstNumber
};

// Do not edit below this line
module.exports = fibonacci;
