let  demonslayers = ["giyu", "obanai", "sanemi", "mitsuri" ,"Rangoku", "Gyomei" ,"myuchiro"];

//Adding anyone in the list 
demonslayers.push("tengen")
console.log(demonslayers)

//filter those who are always angry with tanjiro 

 const angrydemonslayer = demonslayers.filter(function(val){
    if(val =="obanai" || val== "sanemi") return true;

})
console.log(angrydemonslayer);

 //another way of doing the same thing 
 let  tanjirohaters = demonslayers.filter((val) => val !=="giyu")
 console.log(tanjirohaters);

//remove sanemi from the list 

demonslayers.filter(function(val){
    if(val =="sanemi") {
     return demonslayers.pop(val)
    }
})
console.log(demonslayers)

 //@@@@@do it by using index 

 const index = demonslayers.indexOf("sanemi");   // why this is index> -1 
 if(index > -1){
    demonslayers.splice(index ,1 );
 }
console.log(demonslayers) 

//whatif  
const index2 = demonslayers.indexOf("hell0");
console.log(index2) 
// when the index of any value can't be found then it return -1 as it did above 



// sort all the demonslayers in alphabetical order 





// Use a forloop to print each type of demonslayers in an array 
 for( let i =0 ; i< demonslayers.length; i++){
    console.log(demonslayers[i]);
}


// use for loop to find how many demonslayers are tanjiro haters 

                 // for(let i =0 ; i<demonslayers.length; i++){
                 //     let sum =0;
                 //     if (demonslayers[i] == "rangoku","myuchiro","mitsuri"){
                 //         sum++;
                 //         //  console.log(sum) 
                 //     }
                 //    return sum;
                 // }
                 // console.log(demonslayers);

//use a for loop to find how many demonslayers are tanjiro haters
let tanjiroHaterCount = 0;
for (let i = 0; i < demonslayers.length; i++) {
    if (
        demonslayers[i] === "rangoku" ||
        demonslayers[i] === "myuchiro" ||
        demonslayers[i] === "mitsuri"
    ) {
        tanjiroHaterCount++;
    }
}
console.log("Tanjiro haters count:", tanjiroHaterCount);
// The above code i wrote for the same thing si like blunder what the fuck it did 
// and i couldn't find my own mistack for many hours even thank copilot 




//let  demonslayers = ["giyu", "obanai", "sanemi", "mitsuri" ,"Rangoku", "Gyomei" ,"myuchiro"];

// use a for loop to find the name with most characters 
for(let i =0; i<demonslayers.length; i++){
    console.log(demonslayers[i].length);
    
}


// use a for loop to create a new array with  all the name in uppercase 
const newarray = []
for(let i =0;i<demonslayers.length;i++){
    newarray.push(demonslayers[i].toUpperCase());
   
}

console.log(newarray);

// use a for loop to revers the order of the names in the array 

 console.log(demonslayers)