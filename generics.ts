const nums: Array<number> = [];
const colors2: Array<string> =[]
// because Array<T>

const inputEl = document.querySelector("#username");
// inputEl.value => ts error Element does not have field "value"
// to make it less generic 
const inputElRight = document.querySelector<HTMLInputElement>("#username");
// inputElRight.value = 'Hacked' => still error as can be null

const inputElWorking = document.querySelector<HTMLInputElement>("#username")!;
inputElWorking.value = 'Hacked'

// func definition
function identity<Type>(item: Type): Type {
  return item
}
// func call
identity<string>('Viki')

function getRandomElement<T>(list: Array<T>):T {
  const randIndex = Math.floor(Math.random() * list.length)
  return list[randIndex]
}

const randStr = getRandomElement<string>(['viki', 'yakov', 'babi', 'yaniv'])
const randNum = getRandomElement<number>([1, 2, 3, 4, 5])
console.log(randStr, randNum)

// inferred generic type params
// when CALLING a generic func - sometimes no need for explicit annotation
getRandomElement([1, 2, 3, 4, 5]) // TS automatically infers that T is a number

// this is not always the case, eg
const someInput = document.querySelector("#username");
// TS could only infer some unspecific type - Element

// multiple types
function mergeObjs<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1, ...obj2
  }
}

const comboObj = mergeObjs({name: 'Viki'}, {age: 28})
// TS autoamtically infers that the return type of the function is 
// const comboObj: {
  //   name: string;
  // } & {
  //     age: number;
  // }

  // we can add some constraints
  function mergeObjsConstrained<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
      ...obj1, ...obj2
    }
  }

  // now mergeObjsConstrained({name: 'Viki}, 9) will cause  TS error

  // another exmple
  interface Lengthy {
    length: number;
  }

  function printDoubleLength<T>(thing: T) {
    return thing.length * 2
  }
// TS error as 'length' can't exist on smth so generic as T

function printDoubleLength2<T extends Lengthy>(thing: T) {
  return thing.length * 2
}
printDoubleLength2('asdfsaf') // works perfectly fine

// we can achieve the same as
function printDoubleLength3(thing: Lengthy): number {
  return thing.length
}

// generic classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  name: string;
  creator: string;
  resolution: number;
}

class Playlist<T> {
  public queue: T[] = []

  add(element: T) {
    this.queue.push(element)
  }
}

// now i can create a playlist of songs
const songs = new Playlist() // T is uknown
const songss = new Playlist<Song>() // T is Song
songss.add({title: '4 minutes'}) // TS error

// and of videos 
const videos = new Playlist<Video>();