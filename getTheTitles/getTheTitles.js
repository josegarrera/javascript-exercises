const getTheTitles = function(array) {
    let titles = [];
    for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title);
    }
    return titles;
}

module.exports = getTheTitles;
