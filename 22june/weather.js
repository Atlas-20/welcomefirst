// I am going to make a function i which we will tell the weather 
//and it will return a message based on the weather conditon 
//like have unbrella , have sunglasses , have a coat , sunscreen applyetc

function weatheradvice(weather){
    if (weather ==="rainy"){
        return "you should take an umbrella";
    }
    else if (weather==="sunny"){
        return " you should apply sunscreen and wear sunglasses and have a light clothes";
    }
    else if (weather ==="cloudy"){
        return "you should have a light jacket or coat";}
       
     else if (weather ==="snowy") {
        return "please check the weather forecast";
    }
    else{
        return "please check the weather forecast";
    }
}
        
    // weatheradvice("rainy");
    // weatheradvice("sunny");
    // weatheradvice("cloudy");
    // weatheradvice("snowy");
    console.log(weatheradvice());
    // console.log(weatheradvice("sunny"));
    // console.log(weatheradvice("cloudy"));
    // console.log(weatheradvice("snowy"));
    console.log(typeof weatheradvice);



    // let weather = "sunny";
    // if (weather==== "rainy"){
    //     console.log("you should take an umbrella");
    //     else if (weather === "sunny"){
    //         console.log(" you should apply sunscreen and wear sunglasses and have a light clothes")
    //     }
    //     else{
    //         console.log("please check the weather forecase");

    //     }
    // } // I have to order pizza according the no of guest and the size of pizza 

// small if guest <=2
// medium if guest <=4
// large if guest <=6
// extra large if guest >6

// Now we have to decide weather we wnat to solve this using function as we did 
// in weather or nomal varible and if else statement 

let guest = 5;
if (guest <=2){
    console.log(" you should order a small pizza ");  asd
}
    else if (guest <=4){
        console.log(" you should order a medium pizza ");
    }
    else if (guest <=6){
        console.log(" you should order a large pizza ");
    }
    else{
        console.log(" you should order an extra large pizza ");
    }
