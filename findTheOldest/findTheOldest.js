let findTheOldest = function(array) {
    let people = array;
    for (let i = 0; i < people.length; i++) {
        if (!('yearOfDeath' in people[i])) {
            people[i] = {
                name: people[i]['name'],
                yearOfBirth: people[i]['yearOfBirth'],
                yearOfDeath: new Date().getFullYear()
        };
        }
    }
    const oldestPeople = people.sort(function(a,b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
          return -1;
        } else {
          return 1;
        }
      });
    return people[0];


    // let total = 0;
    // let oldestPerson = {};
    // people.reduce((prev, curr) => {
    //     if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
    //         total = curr.yearOfDeath - curr.yearOfBirth;
    //         oldestPerson = curr;
    //     }
    //     return prev;
    // })
    // return oldestPerson;
}; 

module.exports = findTheOldest;