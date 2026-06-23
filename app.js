
const msg = document.querySelector('#message')
const brd = document.querySelector('.board')
const sqr = document.querySelectorAll('.sqr')
const reset = document.querySelector('button')

let playerX = true
let playerO = false
// let winner = ''

brd.addEventListener('click', function (event) {
    // console.log(event.target)
    // console.log(sqr[0].textContent)

    if (!event.target.classList.contains('sqr')) { // applied to sqr class only 
        return
    }

    if (playerX === true) {
        // type X and disable the sqr
        let sqrX = sqr[event.target.id]
        sqrX.textContent = 'X'
        // console.log(sqrX)
        sqrX.classList.add('disable')

        playerX = false
        playerO = true

        msg.textContent = "It's O's turn"
    }

    else {
        // type O and disable the sqr
        let sqrO = sqr[event.target.id]
        sqrO.textContent = 'O'
        // console.log(sqrO)
        sqrO.classList.add('disable')

        playerX = true
        playerO = false

        msg.textContent = "It's X's turn"
    }

    // console.log(sqr[0].textContent)

    if ((sqr[0].textContent !== '') && (sqr[0].textContent === sqr[1].textContent) && (sqr[1].textContent === sqr[2].textContent)) {
        // console.log('inside the if statement')
        msg.textContent = `${sqr[0].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[3].textContent !== '') && (sqr[3].textContent === sqr[4].textContent) && (sqr[4].textContent === sqr[5].textContent)) {
        msg.textContent = `${sqr[3].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[6].textContent !== '') && (sqr[6].textContent === sqr[7].textContent) && (sqr[7].textContent === sqr[8].textContent)) {
        msg.textContent = `${sqr[6].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[0].textContent !== '') && (sqr[0].textContent === sqr[3].textContent) && (sqr[3].textContent === sqr[6].textContent)) {
        msg.textContent = `${sqr[0].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[1].textContent !== '') && (sqr[1].textContent === sqr[4].textContent) && (sqr[4].textContent === sqr[7].textContent)) {
        msg.textContent = `${sqr[1].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[2].textContent !== '') && (sqr[2].textContent === sqr[5].textContent) && (sqr[5].textContent === sqr[8].textContent)) {
        msg.textContent = `${sqr[2].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[0].textContent !== '') && (sqr[0].textContent === sqr[4].textContent) && (sqr[4].textContent === sqr[8].textContent)) {
        msg.textContent = `${sqr[0].textContent} wins!`
        brd.classList.add('disable')
    } else if ((sqr[2].textContent !== '') && (sqr[2].textContent === sqr[4].textContent) && (sqr[4].textContent === sqr[6].textContent)) {
        msg.textContent = `${sqr[2].textContent} wins!`
        brd.classList.add('disable')
    } // After all win checks
    else {
        // Check if all squares are filled
        let isFull = true
        sqr.forEach(function(square){
            if (square.textContent === '') {
                isFull = false
                return
            }
        })

        // for (let i = 0; i < sqr.length; i++) {
        //     if (sqr[i].textContent === '') {
        //         isFull = false
        //         return
        //     }
        // }

        if (isFull) {
            msg.textContent = 'It is a tie!'
            brd.classList.add('disable')
        }

    }
})

reset.addEventListener('click', function () {
    sqr.forEach(function (square) {
        square.textContent = ''
        // console.log(square.classList)
        square.classList.remove('disable')
    })
    msg.textContent = "It's X's turn"
    brd.classList.remove('disable')
    playerX = true
})

