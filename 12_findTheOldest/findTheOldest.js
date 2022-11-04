const findTheOldest = function(people) {
    const currentYear = 2022;
    let oldest;
    let oldestAge=0;

    for (person of people){
        let yearOfDeath = person["yearOfDeath"]; 
        if (yearOfDeath==undefined) {yearOfDeath = currentYear}

        age = yearOfDeath - person["yearOfBirth"];
        
        if (age>oldestAge) {
            oldestAge = age;
            oldest = person;
            console.log([age, oldestAge, person])
        }
    }
    return oldest;
        
};

// Do not edit below this line
module.exports = findTheOldest;
