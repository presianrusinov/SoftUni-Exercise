function sumofTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let combination = 0;
    let numberOne = 0;
    let numberTwo = 0;

    for (let a = startNumber; a <= endNumber; a++) {
        for (let b = startNumber; b <= endNumber; b++) {
            combination++
            if (a + b === magicNumber) {
                numberOne = a;
                numberTwo = b;

                isFound = true
                break;
            }

        }
        if (isFound) {
            break
        }
    }
    if (isFound) {
        console.log(`Combination N:${combination} (${numberOne} + ${numberTwo} = ${magicNumber})`)
    } else {
        console.log(`${combination} combinations - neither equals ${magicNumber}`)
    }

}
sumofTwoNumbers(["23", "24", "20"])