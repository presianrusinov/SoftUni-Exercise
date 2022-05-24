function lunchBreak (input){
let series=input[0];
let lengthOfEpisode=Number(input[1]);
let breakTime=Number(input[2]);

let timeToEat=breakTime*1/8
let timeToRest=breakTime*1/4
let remainingTime=breakTime-timeToEat-timeToRest
let totalTime=remainingTime-lengthOfEpisode

if(remainingTime>=lengthOfEpisode){
    console.log(`You have enough time to watch ${series} and left with ${Math.ceil(Math.abs(totalTime))} minutes free time.`)
}else {
    console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(Math.abs(totalTime))} more minutes.`) }

}
lunchBreak(["Breaking Bad",48,60])