// tyypeof operator
// if (entity typeof "string")

// truthiness guard
// if (entity) ...

// in operator narrowing 
interface Cat {
  name: string,
  numLives: number
}

interface Dog {
  name: string;
  breed: string;
  age: number
}

function makeSound(animal: Cat | Dog) {
  if ("numLives" in animal) {
    animal // ts already knows it's a cat
    return 'Meow!!!'
  }
  return 'Bark!'
}

// instanceof operator - checks the prototype chain
class User {
  constructor(public name: string) {}
}

class Admin {
  constructor(public name: string, public group: string) {}
}

function doStuff(person: User | Admin) {
  if (person instanceof User) {
    person // ts knows it's User
    console.log('Access denied.')
  }
  if (person instanceof Admin) {
    console.log('Enter your password.')
  }
}

// type predicate
// a rather specific case, we work with 2 interfaces - Cat and Dog
// and we want to create a func isCat

function isCat(animal: Cat | Dog): animal is Cat { // the return is Type Predicate
  return (animal as Cat).numLives !== undefined
}

const animal1 = {name: "Kis", numLives: 150}
const animal2 = {name: "Polly", breed: "Chihuahua", age: 12}

console.log(isCat(animal1))
const isAnimal1Cat = isCat(animal1)

// discriminated unions
// if we have different interfaces with all the fields matching (but they don't have to be)
// it is creating a literal property common to multiple types
// we can use this property to afterward discriminate (type narrow) based on it 

interface Pig {
  name: string,
  age: number,
  farm: string,
  kind: 'pig'
}
interface Cow {
  name: string,
  age: number,
  farm: string,
  kind: 'cow'
}

type FarmAnimal = Pig | Cow;

function makeFarmSound(animal: FarmAnimal) {
  // how to discriminate between them?
  // add to the interfaces a field which is typed by LITERAL
  switch (animal.kind) {
    case 'cow':
      return 'Moooo!'
    case 'pig':
      return 'Oim!'
  }
}

const an1: Pig = {
  name: 'stivie',
  age: 3,
  farm: 'Shroot Farms',
  kind: 'pig' // required field! ts will complain w/o it
}
console.log(makeFarmSound(an1))

// exhaustive checks
// imagine you added another interface Sheep to the previous example 
// but forgot to handle it in switch-case
// you want TS to warn you 

interface Sheep {
  name: string,
  age: number,
  farm: string,
  kind: 'sheep'
}

type FarmAnimal2 = Pig | Cow;

function makeFarmSound2(animal: FarmAnimal2) {
  // how to discriminate between them?
  // add to the interfaces a field which is typed by LITERAL
  switch (animal.kind) {
    case 'cow':
      return 'Moooo!'
    case 'pig':
      return 'Oim!'
    default: 
      const _exhaustiveCheck: never = animal; // if you get here, you'll get a TS error
      return _exhaustiveCheck;
  }
}