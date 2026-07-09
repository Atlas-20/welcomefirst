// Function.Prototype.describe = function() {
//     console.log(`Function name of  is ${this.name} `)
// }

// function test(){
//     test.describe();
// }
// console.log(test());





// +++Gobal vs local scope ++++


function createee(){

let count =0;
return function(){
    count++;
    return count;
    // console.log(count);
}
console.log(createee())
}
console.log(createee());