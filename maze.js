const mazeSolver = function(maze){
    if(maze[0].length === 1){
        if(maze[0][0].length === 1){
            return ''
        }
    }

    for(let i = 0; i < maze.length; i++){
        for(let j = 0; j < maze[i].length; j++){
            if(maze[i][j + 1] === ' '){
                return 'R'.concat
            }
        }
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]