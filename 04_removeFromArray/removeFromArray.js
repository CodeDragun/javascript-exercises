const removeFromArray = function(texts, ...otherText) {
    const removedNum = texts.filter((text) => !otherText.includes(text));
      return removedNum;
      };
// Do not edit below this line
module.exports = removeFromArray;
