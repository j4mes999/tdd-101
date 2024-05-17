function analyzeArray(array){
    return {average: average(array),
        min: minimum(array),
        max: maximum(array),
        length: array.length
    };
}

function average(array){
    return roundNumber(array.reduce((a, b) => a + b) / array.length);
}

function roundNumber(number){
    return Math.round( number * 1e2) / 1e2;
}

function minimum(array){
    return Math.min(...array);
}

function maximum(array){
    return Math.max(...array);
}

export default analyzeArray;