function spiral(input){
    var x = 0;
    var y = 0;
    var distance = 1;
    var direction = 'right';
    var distanceCounter = 0;

    for(i = 2; i <= input; i++){
        switch(direction){
            case 'right':
                x = x + distance;
                direction = 'up';
                break;
            case 'up':
                y = y + distance;
                direction = 'left';
                break;
            case 'left':
                x = x - distance;
                direction = 'down';
                break;
            case 'down':
                y = y - distance;
                direction = 'right';
                break;
        }
        console.log("Position of:", i, " ", x, y);
        distanceCounter++;
        if(distanceCounter === 2){
            distance++;
            distanceCounter = 0;
        }
    }

    console.log(Math.abs(x) - Math.abs(y));
}

// module.exports.spiral = spiral;