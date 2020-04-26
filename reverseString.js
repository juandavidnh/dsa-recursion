const reverseString = function(string) {
    let stringArray = string.split('')

    if(stringArray.length <= 1){
        return stringArray[0]
    }

    let newIt = stringArray.slice(0, -1)
    let restring = newIt.join('')
    let reverseIt = reverseString(restring)

    return stringArray.splice(-1).concat(reverseIt).join('')
}

console.log(reverseString("My Name is juan"))