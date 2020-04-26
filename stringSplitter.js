const stringSplitter = function(string, separator) {
    const indexOfFirstSeparator = string.indexOf(separator)
    console.log(indexOfFirstSeparator)

   

    if(indexOfFirstSeparator === -1) {
        return string
    }

    let spliceString = string.slice(0, indexOfFirstSeparator)
    let restString = string.slice(indexOfFirstSeparator + 1)

    return [spliceString].concat(stringSplitter(restString, separator))
    
}

console.log(stringSplitter("2020/10/23", "/"))