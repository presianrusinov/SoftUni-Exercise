function calculateTiles(arg1, arg2, arg3, arg4, arg5) {
    let n = parseInt(arg1);
    let w = parseFloat(arg2);
    let l = parseFloat(arg3);
    let m = parseInt(arg4);
    let o = parseInt(arg5);

    
    let mainArea = n * n;
    console.log('Area: ' +mainArea);

    let benchArea = m * o;
    console.log('Bench: ' +benchArea);

    let tilesArea = w * l;
    console.log('Tiles: ' +tilesArea);

    let areaWithTiles=mainArea-benchArea;
    console.log('Area with tiles: '+areaWithTiles)
    

  

    let tilesCount = areaWithTiles / tilesArea;
    let time = tilesCount * 0.2;
    console.log(Math.round(tilesCount * 100) / 100);
    console.log(Math.round(time * 100) / 100);
}
calculateTiles(40, 0.8, 0.6, 3, 5);