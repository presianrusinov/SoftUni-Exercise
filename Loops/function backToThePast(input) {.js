function backToThePast(input) {
    let i=0;
    let money = Number(input[0]);
    let year = Number(input[1]);
    let age = 17;

    // for (let j = year; j >= 1800; j--) { // does not work, only produced 90%
    for (let j = 1800; j <= year; j++) {
        if (j % 2 === 0) {
            age++;
            money -= 12000;
        } else {
            age++;
            money -= 12000 + age * 50;
        }
        // year--;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        // console.log(`He will need ${Math.abs(money.toFixed(2))} dollars to survive.`);
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}
backToThePast([50000,
    1802])