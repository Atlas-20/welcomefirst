const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


 const capitalname = months.map((month) => {
    // console.log(month);
//   return month.length;
 return month.toUpperCase(); // The return value ends the function execution and returns the value to the caller.so always use this at the end
//   console.log(month);   
})
console.log(capitalname);;
// console.log(month);

//                                  Those needs tobe stored in a varible which has a return value. 
//                                  The map() method creates a new array with the results of calling a provided function on every element in the calling array. 
//                                  It does not change the original array but can be used to change the original array.




// +++++syntax+++++
// const newArray = arr.map(function callback(currentValue, index, array) {
//     // Return element for newArray
// }[, thisArg])

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// syntax: array.map(function(currentValue, index, arr), thisValue)


// +=Examples=+

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const fullNameList = persons.map(getFullName); // can be writeeen as persons.map(function getFullName(item)
                                               //  {return [item.firstname,item.lastname];}));

function getFullName(item) {
  return [item.firstname,item.lastname];//.join(" ");
}
console.log(persons.map(getFullName));
console.log(fullNameList);
