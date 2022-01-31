document.addEventListener('DOMContentLoader', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementByID('score')
    const resultDisplay = document.getElementById('result')
    const width = 4 
    let squares = []

    //creata aplaying board
    function createBoard() {
        for(let i=0; i< width+width; i++){
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(squeare)
            squares.push(squeare)
        }
    }
    createBoard()



})