let anagram = function(string){
    if(string.length < 2){
        return string
    }

    let permutationsArray = []

    for(let i=0; i < string.length; i++){
        let char = string[i]

        if(string.indexOf(char) != i)
        continue

        let remainingChars = string.slice(0, i) + string.slice(i+1, string.length)

        for (let permutation of anagram(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}

console.log(anagram('juan'))