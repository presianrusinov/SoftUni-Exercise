function godzillaKong(input){
let budget=Number(input[0]);
let statist=Number(input[1]);
let clothes=Number(input[2]);

let decorSum=budget*0.1
let clothesSum=statist*clothes

if(statist>150){
    let discount=clothesSum*0.10
    clothesSum-=discount
}

let movieSum=decorSum+clothesSum
if(budget>=movieSum){
    console.log("Action!")
    console.log(`Wingard starts filming with ${(budget-movieSum).toFixed(2)} leva left.`)
}
else{
    console.log("Not enough money!")
  console.log  (`Wingard needs ${(movieSum-budget).toFixed(2)} leva more.`)
}
}
godzillaKong([9587.88,222,55.68])