const memo = {

}

const fibonacci = function(n) {
    if(n < 2){
        return n
    }

    if(memo[n] === undefined){
        memo[n] = fibonacci(n-1) + fibonacci(n-2)
    }

    return memo[n]
}

console.log(fibonacci(40))
console.log(memo)