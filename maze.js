/*const mazeSolver = function(maze){
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
}*/

const mazeSolver2 = function(maze) {
    pathFinder(0, 0, maze, [])
}

const pathFinder = function(x, y, maze, visited){
    if(maze[x][y]==="e"){
        
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
]

