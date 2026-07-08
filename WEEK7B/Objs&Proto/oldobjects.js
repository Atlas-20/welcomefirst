  const obj1 ={
    fname: "ranjan",
    lname:"kumar",
    getfullname:function(){
        return `${this.fname} ${this.lname}`;
    },

}
const obj2 = {                        //So here in obj2 the getfullname is not there so if we try to console.log(obj2.getfullname()) 
    //                                     it will throw an error  it will go to obj2 and find getfullname is not there 
    //                                     then it will go it obj2.prototype and still not found but what if we inject the obj1.proto in obj2
    //
     fname: "siya",
    lname: "sama"
   
}
obj2.__proto__= obj1;  //here we injected the obj1 proto in obj2 proto now getfullname will work in obj2 also without defining in obj2 . Let's see 
                    //  $$$$$ Its the same thing is done underhood of classes +++++++$$$$TO avoid the playing with proto whihc is
                    // not consider good that's why the classed where introduced noting different or special$$$$

// obj2.__proto__.__proto__ = null;

console.log(obj1.getfullname());//difference bw console.log(obj1.getfullname)vs obj1.getfullname()..
                               // i means cllingthe function vs just printing the value 
console.log(obj2.getfullname()); 
// obj2.push("hello");
console.log(obj2);   

//Even if we do the same funtion in the obj2 still we are failed bacaused we are 
// violatiing a single rule of code DRY(do not repeat ) 

    //  +++=And that's where the classes were introduced 
    