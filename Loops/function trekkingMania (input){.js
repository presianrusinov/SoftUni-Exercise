function trekkingMania (input){
    let groupsCount=Number(input[0]);
    let people=0;
    let Mousalla=0,Monblan=0,Kilimandjaro=0,K2=0,Everest=0;
    let group
     
    for(let index=1;index<=groupsCount; index ++){
    group=Number(input[index]);
    people+=group;

    if (group<=5){
        Mousalla+=group
    }else if(group>5 && group <=12){
        Monblan+=group
    }else if(group>12 && group <=25){
        Kilimandjaro+=group
    }else if(group>25 && group <=40){
        K2+=group
    }else if(group>40){
        Everest+=group
    }
     
}
console.log(`${(Mousalla / people*100).toFixed(2)}%`)
    console.log(`${(Monblan / people * 100).toFixed(2)}%`)
    console.log(`${(Kilimandjaro / people * 100).toFixed(2)}%`)
    console.log(`${(K2 / people * 100).toFixed(2)}%`)
    console.log(`${(Everest / people * 100).toFixed(2)}%`)
    }
trekkingMania(["5","25","41","31","250","6"])