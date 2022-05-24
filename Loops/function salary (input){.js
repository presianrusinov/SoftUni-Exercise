function salary (input){
let openTabs=Number(input[0]);
let totalSalary=Number(input[1]);
let inputL=input.length

for (let index=2; index <inputL; index ++ ){
let currentTab=input[index];
switch(currentTab){
case "Facebook":totalSalary-=150;break;
case "Instagram": totalSalary-=100;break;
case "Reddit":totalSalary-=50;break;
}
if (totalSalary<=0){ 
    console.log(`You have lost your salary.`);break;
}
}
if(totalSalary>0) {
    console.log(totalSalary)
}
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])