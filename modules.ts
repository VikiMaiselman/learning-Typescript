// 1. any .js/.ts file without "export" or async-await in the global scope
// means that TS treats them as a SINGLE NAMESPACE
// it we have an index.ts an util.ts in src/ and run npx tsc => 
// both files are compiled to separate utils.js and index.js
// that do not have any export/import statements and we have to manually organize
// all this stuff to run our app properly 

// 2. TS Modules 
// if we add "export" to utils.ts - TS automatically starts using ES6 modules
// and manage files relations for us
// for this to run in tsconfig.json change modules; "ES6"

// we can import types and interfaces as if they were regular JS
export interface Person {
  name: string,
  age: number
}
// on compillation th TS file that contains it turns to a JS file with
// export {}