const repeatString = function(string, value) {
    let finalString = "";
    if (value < 0) return "ERROR";

    for (let i = 0; i < value; i++){ 
        finalString += string;
    }
      return finalString;
  };

// Do not edit below this line
module.exports = repeatString;
