// const arr = [ "apple", "pomegrannate", "grape", "tomato"]

//creating an empty array and providing the elements later;

  // const fruits = [];
   
  //   fruits[1] = "pomegranate";
  //   fruits[2] = "tomato" ;
  //   fruits[3] = " guava";
  //   fruits[5] = "mango ";
  //   fruits[0] = "null";
  
  //   console.log(fruits);
      
  //   // here even the null is a fruit 
  //   fruits[4] = null;
  //    console.log(fruits);

     // Now this null is itself is a null not a array named null 
      

//  // creating array with the word "new ". ..
    
//    const cars = new Array("bmw", "mercedez", "farrari", "rolles-royals");
//    console.log(cars);
//        //it is not such used more even the above is mostly same as it 

//   // changing an array element
//     cars[3] = "tata";
//     cars[5] = "Mahindra";
//     console.log(cars); 


// // Converting array to string 
//     const fruits = ["mango", "pomegranate", "tomato"];
     
//     const fruitsinstring = fruits.toString();
//     // fruits.join("-");
//     console.log(fruitsinstring);
//     console.log(typeof fruitsinstring);

//     const fruitsarray = JSON.stringify(fruitsinstring);

//     console.log(fruitsarray)
//     console.log(typeof fruitsarray)
    
//     const hey = JSON.parse(fruitsarray);
//     console.log(hey);
//     console.log(typeof hey);
                
                    //++Its little confusing i don't understand how 
                    //from string-array and array-string.
    

        // Arrays are objects 
        
    const person = ["jon", "doe", 34];
    //objects usee names to access it "members".
    console.log(person[0]);   // That'show it's accessed 
    console.log(person[person.length -1]);  // This is how the last object is accessed 
    
    
  console.log(typeof person); //objects