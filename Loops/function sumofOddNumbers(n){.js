function sumofOddNumbers(n){
let sum=0
let counter=0
for(let i=1;i<=100;i+=2){ 
    console.log(i);
    counter++     
    sum+=i
    if(counter==n){
        console.log(`Sum: ${sum}`);
        break;
    }
}
 



}
sumofOddNumbers(5)
sumofOddNumbers(3)

// създаваме две помощни променливи, след това един цикъл от 1 до 100, като на всяка итерация ще отпечатва числата на конзола
// през 2 (за да бъдат
// нечетни, брояча се увеличава на всяка итерация и помощната променлива sum събира в себе си стойността от всяка итерация
// ако брояча достигне числото което е зададено в масива (нз дали е масив, просто е подадена стойност), на конзолата се отпечатва
// стойността на променливата sum и break-ваме цикъла 