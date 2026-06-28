
                     // +++Accessing the array+++

     const person = ["jon", "doe", 34];
    //objects usee names to access it "members".

    console.log(person[0]);   // That's how it's accessed [bracket notation]  .1

    console.log(person[person.length -1]);  // This is how the last object is accessed 

              // at() method(for negative indices ) .2
              
              console.log(person.at(-1));

              //[Multidimensional (nester) Array] .3

            //   const matrix = [
            //     [1,2,3],
            //     [4,5,6]

            //   ];
            //   console.log(matrix[1][0]);
            //   //Here the [1]means_Row index 1 and [0]means_column index 0

             
               //Accessing Array of objects 

            //    const users = [
            //     { id:1 , name : "Ranju"},
            //     { id : 2, name : "hello"}   
            //    ];
            //    console.log(users[0].name); // Ranju


// +++++ Looping the array Elements++++



















                        //    ********

        //          Arry uses numbered indexes.
        //          objects uses named indexes 
        //          Arrays are special kind of objects with numbered indexes 
                  

        // when to use what 
        //          . Javscript does not support associative arrays 
        //          . you should use objects when you want the elements names to be strings 
        //          . you should use arrays when you want the elements names to e numbers 



                             //    +++++Array Methods+++

                           //  .concat()    "Join two or more arrays(or values) together without changing the original "

                           //  .filter()    "Creates a new array containing only the elements that satisfy a condition."

                           //  .pop()       "Remove the last element"
                           //  .slice()     "Copies a part of an array"(it doesn't remove anything)
                           //  .unshift()   "Add element at the beginning "
                           //  .shift()     "Remove the first element "
                           //  .sort()       "Sort the array"

                           //  .find()      "Return the first element matching a condtion".
                           //  .push()      "Add an element at the end "
                           //  .reverse()    " Reverse an array"
                                      
                           //  .map()        "transform every element into something else ""

                           //  .splice()     "(most powerful) It can - 1. Remove elements
                           //                                          2. Add elements 
                           //                                          3. Replace elements"(It modifies the original array)
                                      
                           //  .join()        "Converts the array into a string "
                           //  .tostring()    "Converts an array to a comma-separated string."
                           //      

//  .1 - Adding elements

  const fruits = ["banana", "orange", "apple"];
  fruits.push("lemon");
  console.log(fruits)


