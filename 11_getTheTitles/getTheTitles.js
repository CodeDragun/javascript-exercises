const getTheTitles = function(arr) {
    return arr.reduce(((acc, item) => {
        if(!acc[item.title])
            acc.push(item.title)
        return acc
    }), [])

};

// Do not edit below this line
module.exports = getTheTitles;
