function timeMachine(input) {
    let inheritedSum = Number(input[0]);
    let yearToLive = Number(input[1]);
    
    let age = 18;

    for ( let  index = 1800; index <= yearToLive; index++) {


        if (yearToLive % 2 == 0) {
            
            inheritedSum -= 12000
            
        } else  {
            
            inheritedSum -= 12000 + age * 50
            

        }
age+=1
    }
    if (inheritedSum>=0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedSum.toFixed(2)} dollars left`)
    } else {
        console.log(`He will need ${Math.abs(inheritedSum).toFixed(2)} dollars to survive." `)
    }
}
timeMachine([100000.15,
    1808])