function favMovie(movie = 'The Room', name = 'World') {
    console.log(`My name is ${name}. My favorite movie is ${movie}.`);
}
favMovie('Cinema Paradiso', 'Heather');

let favMovie2 = (movie = 'The Room', name = 'World') =>
    console.log(`My name is ${name}. My favorite movie is ${movie}.`);

favMovie2('Cinema Paradiso', 'Heather');

function getFirstName(person) {
    let firstName = person.split(' ');
    console.log(`My first name is ${firstName[0]}.`);
}

getFirstName('Mickey Mouse');

// let getFirstName2 = (person1) => ({
//     firstName: person1.split(' '),
//     name: firstName[0],
// console.log(name);
// });

let getFirstName2 = person1 => (firstName = person1.split(' '));

fName2 = getFirstName2('Donald Duck');
console.log(`My first name is ${fName2[0]}.`);

let funnyMath = (a, b) => ({
    expo: a ** b,
    prod: a * b
});

let calc = funnyMath(3, 2);
console.log(
    `The power of the two numbers is ${calc.expo} and the product is ${
        calc.prod
    }`
);

let arr = ['Paul', 'Birmingham', 'Kimchi']

let myFunc = (name, location, favFood) => ({
    myName: name,
    myLoc: location,
    myFood: favFood
})

let aboutPerson = myFunc(...arr)
let who = aboutPerson.myName
console.log(who)

let sentence = 'Winter is coming'
let spSentence = [...sentence]

let words = (str) => {
    for (i = 0; i < str.length; i++ ) {
        console.log(str[i])
    }
}

words(spSentence)