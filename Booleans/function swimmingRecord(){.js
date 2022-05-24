function swimmingRecord(input){
let recordSeconds=Number(input[0]);
let distanceToSwim=Number(input[1]);
let timeToSwim=Number(input[2]);

let mustSwim=distanceToSwim*timeToSwim
let slowDown=Math.floor(distanceToSwim/15)*12.5
let totalTime=mustSwim+slowDown

if(recordSeconds>totalTime){
    console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
}else{
    console.log(`No, he failed! He was ${(totalTime-recordSeconds).toFixed(2)} seconds slower.`)
}

}
swimmingRecord([55555.67,3017,5.03])