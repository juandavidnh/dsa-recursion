const sheepCounter = function(sheep) {
    if(sheep === 0) {
        return "All sheep jumped over the fence"
    }

    console.log(sheep+': Another sheep jumps over the fence')

    return sheepCounter(sheep - 1)
}

console.log(sheepCounter(3))