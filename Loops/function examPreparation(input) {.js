function examPreparation(input) {
    let goodGrades = 0;
    let badGrades = 0;
    let gradesSum = 0;
    let index = 0;
    let nameExam = ' '
    let command = input[index]


    while (badGrades > command) {
        nameExam++
        index++
        if (command === "Enough") {
            let avGrade = gradesSum / badGrades
            let nameExam
            console.log(`Average score: ${(avGrade).toFixed(2)}`)
            console.log(`Number of problems: ${command}`)
            console.log(`Last problem: ${nameExam}`);
            break;
        }
        gradesSum++
        goodGrades++

        if (gradesSum >= 4) {
            badGrades++
            nameExam === "Bus"
        }
    }

    if (badGrades === 4) {
        console.log(`You need a break, ${badGrades} poor grades.`)
    }
console.log(index)
}
examPreparation([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"])