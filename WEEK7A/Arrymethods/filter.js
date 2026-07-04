// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.



// syntax:    array.filter(function(currentValue, index, arr), thisValue)

// Parameter	Description

// function()	 Required.
// A function to run for each array element.

// currentValue	Required.
// The value of the current element.

// index	Optional.
// The index of the current element.

// arr	Optional.
// The array of the current element.

// thisValue	Optional. Default undefined
// A value passed to the function as its this value.
 
          // Return value: 
          // Array	-An array of elements that pass the test.
          // An empty array if no elements pass the test.

// +++examples+++

//  const ages = [23,53,34,34,343,346,14 ]

// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
//   console.log(result); // [23, 53, 34, 34, 343, 346]





  const months = ["january", "february", "march", "april"]

  const promonths =months.filter((month,index,arr) => {
    console.log(month,index,arr);
    console.log(month.length);
    console.log(month.length >5);
    console.log(months.length);  //
    return month.length > 5;
  })
  console.log(promonths);
  // console.log(month.length); // in js variable declared inside a function is not accessible outside the function. 
  // So this line will throw an error because month is not defined in this scope. 
  // It is only defined within the filter callback function scope.


//   Question: make a months array and filter out the months which have M in them or not 
     return month.includes("m") || month.includes("M");
     // return this and it will give which has m or M in them. 