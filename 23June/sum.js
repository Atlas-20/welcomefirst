let number = [2,4,5,6,6,7,];

console.log(number);


function sum(number){

let addition= 0;

    for (let h=0; h < number.length; h++){
        addition=number[h]+addition;
        console.log(addition);
    }
}

sum(number);
