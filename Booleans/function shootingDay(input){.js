function shootingDay(input) {
    let timeToShoot = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneTime = Number(input[2]);

    let terrainPrepare = timeToShoot * 0.15
    let timeToFilm = scenesCount * sceneTime
    let neededTime = terrainPrepare + timeToFilm
    let remainingTime = timeToShoot - neededTime
    let leftTime = neededTime - timeToShoot

    if (neededTime > timeToShoot) {
        console.log(`Time is up! To complete the movie you need ${Math.abs(leftTime)} minutes.`)
    }
    else if (remainingTime < timeToShoot) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(remainingTime)} minutes left!`)
    }

}

shootingDay([60, 15, 3])