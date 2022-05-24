function hospital(input){
let days=Number(input[0]);
let totalPatients=0
let newPatients=0;
let doctors=7;
let treatedPatients=0;
let untreatedPatients=0;

for(let index=0;index>=days;index++){
    newPatients=input[index];
    index++
    totalPatients+=newPatients
    index++
  //  if(index===3 && untreatedPatients>treatedPatients){
    //    doctors++;}
    
// if(newPatients>doctors){
//untreatedPatients+=(newPatients-doctors) //MAYBE SWITCH INDEX =3 CHECK WITH THIS, JUST SWITCH PLACES IDK
   // }else{
    //    treatedPatients+=(doctors-newPatients)
    }
  //  index++
    
         // BE CAREFUL HERE
 //   }
   // index++
   // console.log(`Treated patients: ${newPatients}.`)
   // console.log(`Untreated patients: ${untreatedPatients}.`)
//}






}
hospital([4
    ,7
    ,27
   , 9
    ,1])