// What is a polyfill??
//   Its a piece of code that heps to run or new codes on older devices 




//       You don't memorize implementations.
//       Instead learn how to build one.

// For example, if tomorrow someone asks:>

//     Write a polyfill for map
    
//     Your thinking should be:
    
       // map returns a new array.
       //Each element iterate 
       //take userfunction.

// So:

// 1. Create empty array.
// 2. Loop through original array.
// 3. Call callback for every element.
// 4. Push returned value.
// 5. Return new array.

// Then writing code becomes easy.


Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// Notice you didn't memorize this—you derived it from how map works.

// What should you memorize?

// Only:

// Syntax for adding methods to prototypes

       // Array.prototype.myMethod = function () {
       // };
       
       // or
       
       // Function.prototype.myBind = function () {
       // };

// Everything inside should come from understanding.


                        //    But you could see how these parent methods work like 
                        //    how .map behaves and .forEach behave then understanding will be more easy 
                           
                        //   +++++WHAT YOU SHOULD KNOW ++++

// Instead of memorizing 100+ methods, learn the important ones deeply.

// Array

         // These are the most common polyfill interview questions:
         
         // ✅ forEach
         // ✅ map
         // ✅ filter
         // ✅ reduce
         // ✅ find
         // ✅ findIndex
         // ✅ some
         // ✅ every
         // ✅ includes
         // ✅ indexOf
         // ✅ flat
         // ✅ flatMap

// Function

           // These are very important.
           
           // ✅ call
           // ✅ apply
           // ✅ bind
           
           // These test your understanding of this.


// //Objects
//         The most common object-related polyfills are:

//           ✅ Object.keys()
//           ✅ Object.values()
//           ✅ Object.entries()
//           ✅ Object.assign()
//           ✅ Object.fromEntries()
          
//           They are much less common in interviews than array methods or Function.prototype.call, apply, and bind.

// Promise

// Later when you learn async JS:

// Promise.all
// Promise.race
// Promise.any
// Promise.allSettled
// String

// Usually not asked much.

// Sometimes:

// trim
// repeat
// startsWith
// endsWith  




                    //   Jab bhi polyfills likhna hai > Pehle Real signature ko samjho 
                    //(means jis function ka likhna hai uske behaviour ko samjho) 
