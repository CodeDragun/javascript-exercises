const findTheOldest = function(array) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    return array.reduce((oldest, youngest) =>{
        let result;
        const oldestPerson = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const youngestPerson = (youngest.yearOfDeath || currentYear) - youngest.yearOfBirth;
        
      return oldestPerson > youngestPerson ? oldest : youngest
     
    })
};

// Do not edit below this line
module.exports = findTheOldest;
