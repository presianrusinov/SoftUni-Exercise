function leapYear(year){
if (year % 4==0 && year % 100!==0 || year % 400===0){  // OPERATORS && and || are important here becouse both first two conditions
    console.log(`Yes`);                         // must be true TOGETHER (divisible by 4 , AND and the same time NOT divisible by
}else{                                           // 100, OR are disible by 400 (third operator), BE CAREFUL!
    console.log(`No`);
}






}
leapYear(1984)
leapYear(2003)
leapYear(4)