function wineHarvest(input){
let squareArea=Number(input[0]);
let grapePerSquare=Number(input[1]);
let wineCountLiters=Number(input[2]);
let workersCount=Number(input[3]);
let neededGrapePerLiter=2.5

let totalGrape=squareArea*grapePerSquare
let totalWine=(totalGrape*0.40)/neededGrapePerLiter
let remainingWinePerson=(totalWine-wineCountLiters)/workersCount

if(totalWine>=wineCountLiters){
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`)
    console.log(`${Math.ceil(totalWine-wineCountLiters)} liters left -> ${Math.ceil(remainingWinePerson)} liters per person.`)
}
else{
    console.log(`It will be a tough winter! More ${Math.floor(wineCountLiters-totalWine)} liters wine needed.`)
}



}
wineHarvest([650,2,175,3])