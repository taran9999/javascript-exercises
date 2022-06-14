const findTheOldest = function(people) {
    let oldestIndex = 0;
    let oldestAge = 0;
    for(let i = 0; i < people.length; i++) {
        if(!people[i].yearOfDeath) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        let a = people[i].yearOfDeath - people[i].yearOfBirth;
        if(a > oldestAge) {
            oldestIndex = i;
            oldestAge = a;
        }
    }
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
