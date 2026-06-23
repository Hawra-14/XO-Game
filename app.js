
const msg = document.querySelector('#message')
const brd = document.querySelector('.board')
const sqr = document.querySelectorAll('.sqr')

let playerX = true
let playerO = false
let winner = ''

brd.addEventListener('click', function (event) {
    console.log(event.target)
    console.log(sqr[0].textContent)

    if (playerX === true) {
        // type X and disable the sqr
        let sqrX = sqr[event.target.id]
        sqrX.textContent = 'X'
        // console.log(sqrID)
        sqrX.classList.add('disable')

        playerX = false
        playerO = true

        msg.textContent = "It's O's turn"


    }

    else {
        // type O and disable the sqr
        let sqrO = sqr[event.target.id]
        sqrO.textContent = 'O'
        // console.log(sqrID)
        sqrO.classList.add('disable')

        playerX = true
        playerO = false

        msg.textContent = "It's X's turn"
    }

    // console.log(sqr[0].textContent)

    if (sqr[0].textContent === sqr[1].textContent === sqr[2].textContent) {
        console.log('inside the if statement')
        msg.textContent = `${sqr[0].textContent} wins!`
        brd.classList.add('disable')
    }
    if (sqr[0].textContent === 'X' && sqr[3].textContent === 'X' && sqr[6].textContent === 'X') {
        msg.textContent = 'X wins!'
        brd.classList.add('disable')
    }
})

// check for winner function
// decide if the game is over
// then find the winner

// winPossibilities() {
//     const win = [0,1,2]
// }

