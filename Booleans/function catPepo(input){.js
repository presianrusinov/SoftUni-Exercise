function catTom(input){
let restDaysYear=Number(input[0])
let norm=30000;

let playWhenWork=63;
let playWhenRest=127;
let daysPerYear=365;
let restDaysPlay=restDaysYear*playWhenRest
let workDaysPlay=(daysPerYear-restDaysYear)*playWhenWork
let minutes=norm-workDaysPlay
let convertHours=minutes/60
let convertMinutes=(convertHours-137)*100

if(norm>workDaysPlay){
    console.log(`Tom sleeps well`)
    console.log(`${Math.trunc(convertHours)} hours and ${convertMinutes} minutes less for play`)
}
 else if(norm<workDaysPlay) {
    console.log(`Tom will run away`)
    console.log(`${convertHours} hours and ${convertMinutes} minutes more for play`)
}

}
catTom([20])