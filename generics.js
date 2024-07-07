var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nums = [];
var colors2 = [];
// because Array<T>
var inputEl = document.querySelector("#username");
// inputEl.value => ts error Element does not have field "value"
// to make it less generic 
var inputElRight = document.querySelector("#username");
// inputElRight.value = 'Hacked' => still error as can be null
var inputElWorking = document.querySelector("#username");
inputElWorking.value = 'Hacked';
// func definition
function identity(item) {
    return item;
}
// func call
identity('Viki');
function getRandomElement(list) {
    var randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
var randStr = getRandomElement(['viki', 'yakov', 'babi', 'yaniv']);
var randNum = getRandomElement([1, 2, 3, 4, 5]);
console.log(randStr, randNum);
// inferred generic type params
// when CALLING a generic func - sometimes no need for explicit annotation
getRandomElement([1, 2, 3, 4, 5]); // TS automatically infers that T is a number
// this is not always the case, eg
var someInput = document.querySelector("#username");
// TS could only infer some unspecific type - Element
// multiple types
function mergeObjs(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var comboObj = mergeObjs({ name: 'Viki' }, { age: 28 });
// TS autoamtically infers that the return type of the function is 
// const comboObj: {
//   name: string;
// } & {
//     age: number;
// }
// we can add some constraints
function mergeObjsConstrained(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
function printDoubleLength(thing) {
    return thing.length * 2;
}
// TS error as 'length' can't exist on smth so generic as T
function printDoubleLength2(thing) {
    return thing.length * 2;
}
printDoubleLength2('asdfsaf'); // works perfectly fine
// we can achieve the same as
function printDoubleLength3(thing) {
    return thing.length;
}
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (element) {
        this.queue.push(element);
    };
    return Playlist;
}());
// now i can create a playlist of songs
var songs = new Playlist(); // T is uknown
var songss = new Playlist(); // T is Song
songss.add({ title: '4 minutes' }); // TS error
// and of videos 
var videos = new Playlist();
