function maxNumber(input){
let index=0;
let command=input[index]
index++

let totalNumber=Number.MIN_SAFE_INTEGER

while(command!=="Stop"){
let num=Number(command);

if(totalNumber<num){
    totalNumber=num
}
command=input[index];
index++

}
console.log(totalNumber)
}
maxNumber([100,99,80,70,"Stop"])