//90 >=A
//80 <= 90 =B

//70 <= 80 =C
//60 <= 70 =D
//below 60 =F
 
function calculateGrade (score) {
    if (score >= 90) {
        return "A";
    }
   else if (score >= 80) {
        return "B";
    }
   else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    return "F";
}
 console.log(calculateGrade(85));
 
 //This is the second way to write the same function 
 
 let Grade = calculateGrade (33);
 console.log(Grade);