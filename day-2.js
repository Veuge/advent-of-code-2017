function checksum(input, part){
    var sum = 0;
    var rows = input.split('\n');
    rows.forEach(function(row){
        var items = row.split('\t').map(function(x){ return +x; });
        items.sort(function(a,b){
            return a - b;
        });1
        sum += returnOperationResult(part, items);
    });
    console.log(sum);
}

function returnOperationResult(part, array){
    if(part === 1){
        return array[array.length - 1] - array[0];
    }
    else {
        var i = array.length - 1;
        while(i >= 0){
            var j = i - 1;
            while(j >= 0){
                if(array[i] % array[j] === 0){
                    return array[i] / array[j];
                }
                j--;
            }
            i--;
        }
    }
}

module.exports.checksum = checksum;