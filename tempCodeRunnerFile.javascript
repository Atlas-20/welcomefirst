function applyoperation(a,b,operation){
    return operation(a,b);

}
const result = applyoperation(5,4,(x,y) =>x/y)


function createee(){

let count =0;
return function(){
    count++;
    return count;
    console.log(count);
}

}