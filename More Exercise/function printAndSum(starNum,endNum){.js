function printAndSum(starNum,endNum){
let sum=0;
let outputNum='';

for(let i=starNum;i<=endNum;i++){
sum+=i // WE ADD THE VALIE OF I , TO THE EMPTY VALUE OT SUM
outputNum+=`${i} ` //WE ADD THE EMPTY STRING otputNum TO INTERPOLATION OF i IN ORDER to PUT NUMBERS IN ONE LINE 
}
console.log(outputNum);
console.log(`Sum: ${sum}`);


/*
2. За да избягаш от проблем с допълнителен Space във даден стринг винаги може да направиш една булева в която да кажеш ако примерно
еди какво си отпечатай еди какво си без спейс(например в цикъл ако едно число достигне
до стойността която искаме), ако ли не отпечатай го със спейс */







}
printAndSum(5, 10)