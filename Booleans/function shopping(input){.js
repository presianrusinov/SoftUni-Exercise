function shopping(input){
let budget=Number(input[0]);
let videocards=Number(input[1]);
let processors=Number(input[2]);
let ram=Number(input[3]);

let videocardsSum=videocards*250
let processorsSum=(videocardsSum*0.35)*processors
let ramPrice=(videocardsSum*0.10)*ram

let totalSum=videocardsSum+processorsSum+ramPrice
let discount=0.0
if(videocards>processors){
discount=totalSum*0.15
}
let finalPrice=totalSum-discount
if(finalPrice<=budget){

console.log(`You have ${(budget-finalPrice).toFixed(2)} leva left!`)
}else {
    console.log(`Not enough money! You need ${(finalPrice-budget).toFixed(2)} leva more!`)
}
}
shopping([920.45,3,1,1])