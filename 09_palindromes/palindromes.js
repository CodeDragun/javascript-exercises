const palindromes = function (text) {
const alphaNumerics= "abcdefghijklmnopqrstuvwxyz0123456789";


const textArr = text.toLowerCase().split('');
const filteredArr = textArr.filter(word => alphaNumerics.includes(word));
const newText = filteredArr.join('');
const reversedText = filteredArr.reverse().join('');
return reversedText == newText
};

// Do not edit below this line
module.exports = palindromes;
