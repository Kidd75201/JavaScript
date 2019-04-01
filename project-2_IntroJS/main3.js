// var person = new Object();

// var job = 'profession';
// var name = 'firstname';
// person.name = 'John';
// person.name = 'Bob';
// person['lastname'] = 'Smith';
// person[job] = 'instructor';
// console.log(person);
// console.log(person.firstname);
// console.log(person['lastname']);


// person.firstname = 'John';
// person.lastname = 'Smith';

// person.son = new Object();
// person.son.name = 'Nick';
// person.son.age = 5;

// <<<<<<<<<<     Part 2 Literal notation  >>>>>>>>>>>>

var person = {
     firstname: 'John'
    ,lastname: 'Smith'
    ,age: 27
    ,daughter: {
        name: 'Mary'
        ,age: 5
    },
    myFunc: function(daughterName, daughterAge, fatherName) {
        console.log(daughterName + ' is a daughter of '
        + fatherName + ' and she is ' + daughterAge
        + ' years old.');
    },
    newFunc: function(par) {
        console.log(par.daughterName + ' is a daughter of '
        + par.fatherName + ' and she is ' + par.daughterAge
        + ' years old.');
    }
};

console.log(person);
console.log(person.daughter.name);

person.myFunc(person.daughter.name, person.daughter.age,
    person.firstname);

person.newFunc({daughterName: 'Julie', daughterAge: 5,
    fatherName: 'Mike'});