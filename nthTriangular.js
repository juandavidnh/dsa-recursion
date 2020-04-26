const nthTriangular = function(n){
    if(n < 1){
        return "n must be equal or greater than 1"
    }

    if(n === 1){
        return n
    }
    
    return n + nthTriangular(n-1)
}

console.log(nthTriangular(6))