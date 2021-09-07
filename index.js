const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let score = 0

function createGrid(){
    for (let i=0 ; i < width*width ; i++){

    const square = document.createElement('div')

    square.classList.add('square')

    grid.appendChild(square)

    squares.push(square)   

    }

}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move(){
    
    if(
        (currentSnake[0] + width >= width*width && direction === width) ||
        (currentSnake[0] % width === width-1 && direction  === 1) ||
        (currentSnake[0] % width === 0 && direction  === -1) ||
        (currentSnake[0] - width < 0 && direction  === -width) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)




    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)



    if (squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        generateApples()
        score.textContent += score
    }
    squares[currentSnake[0]].classList.add('snake')
}
move()

let timerId = setInterval(move, 1000)

function generateApples(){
    do {
    appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApples()

// 39 is right arrow
// 38 is up arrow 
// 37 is left arrow 
// 40 is down arrow 

function control(e) {
    if (e.keyCode === 39){
        console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38){
        console.log('up pressed')
        direction = -width
    } else if (e.keyCode === 37){
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40){
        console.log('down pressed')
        direction = +width
    }
}

document.addEventListener('keyup', control)
document.addEventListener('keydown', control)