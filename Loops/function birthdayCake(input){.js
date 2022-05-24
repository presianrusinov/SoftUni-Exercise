function birthdayCake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let piece = 0;
    let size = length * width
    let index = 2;
    let command = input[index];
    index++

    while (command !== "STOP") {
        piece=Number(command)
        size-=piece;
        if (size< 0) {
            console.log(`No more cake left! You need ${Math.abs(size)} pieces more`)
            break;

        } 
        index++
        command=input[index]
        if (size >=0) {
            console.log(` "${size} pieces are left.`)

        }
    }
}
birthdayCake([10, 10, 20, 20, 20, 20, 2])