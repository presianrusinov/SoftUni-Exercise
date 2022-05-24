function trainingLab(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    
    let widthPlaces=((width*100)-100)/70
    let lengthPlaces=((length*100)/120)

    let totalPlaces=Math.abs(Math.floor(widthPlaces))*Math.abs(Math.floor(lengthPlaces))-3;


console.log(totalPlaces)

}
trainingLab([15, 8.9])