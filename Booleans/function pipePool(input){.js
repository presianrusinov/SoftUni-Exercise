function pipePool(input){
    let v=Number(input[0]);
    let p1=Number(input[1]);
    let p2=Number(input[2]);
    let n=Number(input[3]);
 
    let firstPipe=p1*n
    let secondPipe=p2*n
    let bothPipes=firstPipe+secondPipe
    let totalWater=(bothPipes*v)/10000
 
    if(bothPipes<v){
        let firstPipePercent=((bothPipes-secondPipe)/totalWater*10).toFixed(2)
        let secondPipePercent=((bothPipes-firstPipe)/totalWater*10).toFixed(2)
        console.log(`The pool is ${totalWater}% full. 
        Pipe 1: ${firstPipePercent}%. Pipe 2: ${secondPipePercent}%.`)
    }
    else if (bothPipes>v){
    let overflow=(firstPipe+secondPipe)-v
    console.log(
        `For ${n} hours the pool overflows with ${overflow} liters.`)
 
    }
}

pipePool([1000,100,120,3])