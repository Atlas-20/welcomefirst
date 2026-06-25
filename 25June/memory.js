
// let p1 ={
//     Name : "Sharmaji",
//     work : "carpenter",
//     address = {
//         state: "bihar",
//         district:" Eastchamparan",
//         block: "sugauli",
//         village: "lamauniya",
//         houseno : 23,
//     }
// }
// let p2 = { 
//     Name : p1.Name,
//     work : p1.work,
    

// }
//  p2.Name = "Ranju"

// console.log(p2);
// console.log(p1);


// So here what is happening is that we made changes in p2 and the change was visible only in p2
// while in primitive if we make any changes we don't find the change in the next one 
//
//and in objects also when we make changes we see the same change in both the objects but here is not that case 


// because we hvae made another object with the same value there will be two address pointing the two different objects 
// having the same value 


//Now the problem is : if we make any object in the p1 and then what happens 
// in the p2 we did     address : p1.address   // it didn't cpy the value instead it copies the 
                                            //  reference of the address now if we make any changes in 
                                            //  the p2 with int he addess then that will be shown in the p1 also 
                                            //  and that's it 


// Evern the spread operator does the same 
//          spread operator(...)// It creates the same array or object with the shallow copy of values in it 

         
         
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);                                            
// //well the output is [1,2,3]

// without spread both the arr1 and arr2 share the same refrence and due 
// to that any change in arr2 will be visible in arr1 

// arr2.push(4);

// console.log(arr1); // [1,2,3,4]// changes made in arr2 is making changesn in arr1 too 
        
//                     // SO BASICALLY SPREAD OPERATOR IS SHORTCUT OR THAT SAME WAY TO DOING 
//                     // THE P1 AND P2 WHAT WE DID ABOVE 
 
// evern for the objects 

//   const user = {
//   name: "Atlas",
//   age: 20
// };

// const copy = {
//   ...user
// };
// // This creates the new object constaing the same property 
                      
                      
                    //    But still the problem is same whatif any object come inside the object 
                    //    the refrence will be copies instead of the value and problem starts 

                    // Now the solution iO Object>(convert into ) > string ( the string itself is copy)>
                    //   string (convert this string into ) > Object 

                    //   Non-primitive> primitve>copy> Non-primitve
                      // This is called "DEEP COPY AND PREVIOUS ONE WAS SHALLOW COPY"


   let  p1 = {
        Name : "Ranju",
        Semester: 2,
        Hobbies: ["writing", "coding", "playing"],
        Address : {
            state: 'bihar',
            village: 'sugauli',
            nouseno: 12
        }
        
    }
//    let  p2 ={
//         Name : p1.Name,
//         Semester:p1.Semester,
//         Hobbies: p1.Hobbies,
//         address: p1.Address,


//     }






const P1kastring = JSON.stringify(p1)
console.log(P1kastring);

let p2 = JSON.parse(P1kastring)
p2.Name= "Ranjan"
p2.Address.state= "maharashter"

console.log(p1)
console.log(p2)
                     
                // finally the code run