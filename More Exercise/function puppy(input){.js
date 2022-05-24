function puppy(input) {
    let index = 0;
    let food = Number(input[index]) * 1000;
    index++;

    let command = input[index]
    let eatenFood = 0

    while (command !== "Adopted") {
        {
           
            let currentFood =Number( input[index])
            index++
            eatenFood += currentFood

            command = input[index]


            if (command === "Adopted") {
                break
            }
        }

    }
    if (eatenFood<=food) {
        console.log(`Food is enough! Leftovers: ${Math.abs(food - eatenFood)} grams.`);
    } else if (eatenFood>=food) {
        console.log(`Food is not enough. You need ${Math.abs(eatenFood - food)} grams more.`);
    }
}
puppy([2
    , 999
    , 456
    , 999
    , 999
    , 123
    , 456
    , "Adopted"])