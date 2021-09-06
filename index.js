const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid(){
    for (let i=0 ; i < 100 ; i++){

    const square = document.createElement('div')

    square.classList.add('square')

    grid.appendChild(square)

    squares.push(square)   

    }

}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move(){
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('snake')
}
move()

let timerId = setInterval(move, 1000)
// clearInterval(timerId)

// 39 is right arrow
// 38 is up arrow 
// 37 is left arrow 
// 40 is down arrow 

function control(e) {
    if (e.keyCode === 39){
        console.log('right pressed')
    } else if (e.keyCode === 38){
        console.log('up pressed')
    } else if (e.keyCode === 37){
        console.log('left pressed')
    } else if (e.keyCode === 40){
        console.log('down pressed')
    }
}
