const binaryConverter = function(n){
    if(n === 0){
        return 0
    }

    return [n%2].concat(binaryConverter(Math.floor(n/2))).join('')
}

console.log(binaryConverter(10))