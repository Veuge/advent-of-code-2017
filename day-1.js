function captcha(input, increment, normal){
    var sum = 0;
    var i = 0;
    var multiplier = normal ? 1 : 2;

    while(i < input.length){
        var current = input[i];
        var next = (i + increment === input.length && normal) ? input[0] : input[i + increment];
        if(current === next){
            sum += (parseInt(current) * multiplier);
        }
        i++;
    }
    console.log(sum);
}

module.exports.captcha = captcha;