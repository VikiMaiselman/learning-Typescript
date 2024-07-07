// tyypeof operator
// if (entity typeof "string")
function makeSound(animal) {
    if ("numLives" in animal) {
        animal; // ts already knows it's a cat
        return 'Meow!!!';
    }
    return 'Bark!';
}
// instanceof operator - checks the prototype chain
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(name, group) {
        this.name = name;
        this.group = group;
    }
    return Admin;
}());
function doStuff(person) {
    if (person instanceof User) {
        person; // ts knows it's User
        console.log('Access denied.');
    }
    if (person instanceof Admin) {
        console.log('Enter your password.');
    }
}
// type predicate
// a rather specific case, we work with 2 interfaces - Cat and Dog
// and we want to create a func isCat
function isCat(animal) {
    return animal.numLives !== undefined;
}
var animal1 = { name: "Kis", numLives: 150 };
var animal2 = { name: "Polly", breed: "Chihuahua", age: 12 };
console.log(isCat(animal1));
var isAnimal1Cat = isCat(animal1);
function makeFarmSound(animal) {
    // how to discriminate between them?
    // add to the interfaces a field which is typed by LITERAL
    switch (animal.kind) {
        case 'cow':
            return 'Moooo!';
        case 'pig':
            return 'Oim!';
    }
}
var an1 = {
    name: 'stivie',
    age: 3,
    farm: 'Shroot Farms',
    kind: 'pig' // required field! ts will complain w/o it
};
console.log(makeFarmSound(an1));
