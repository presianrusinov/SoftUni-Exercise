
function toyShop(input){
    let tripPrice=Number(input[0]);
    let puzzles=Number(input[1]);
    let dolls=Number(input[2]);
    let bears=Number(input[3]);
    let minions=Number(input[4]);
    let trucks=Number(input[5]);
 
    let sum=(puzzles*2.60)+(dolls*3)+(bears*4.10)+(minions*8.20)+(trucks*2)
    let toyNumber=puzzles+dolls+bears+minions+trucks
    let discount=0.0
    if(toyNumber>=50){
    discount=sum*0.25}
    let moneyAfterRent=(sum-discount)*0.10
    let profit=sum-discount-moneyAfterRent
    if(profit>=tripPrice){
        console.log(`Yes! ${(profit-tripPrice).toFixed(2)} lv left.`)
    }
   

}
toyShop(["40.8,20,25,30,50,10"])
