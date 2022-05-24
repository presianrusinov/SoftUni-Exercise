function rounding(number,precision){
if(precision>=15){
    precision=15
}
let newNumber=number.toFixed(precision)
let finalNumber=parseFloat(newNumber)
console.log(finalNumber);


}
rounding(10.5,3)