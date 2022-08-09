let board = [];
board[0] = false
board[1] = document.getElementById("1")
board[2] = document.getElementById("2")
board[3] = document.getElementById("3")
board[4] = document.getElementById("4")
board[5] = document.getElementById("5")
board[6] = document.getElementById("6")
board[7] = document.getElementById("7")
board[8] = document.getElementById("8")
board[9] = document.getElementById("9")
let popUp = document.getElementById("popup")
let winnerName = document.getElementById("winner-name")
let someoneWon = false;
function didIWin(player){
    if (
        (board[1].innerHTML == player && board[2].innerHTML == player && board[3].innerHTML == player) ||
        (board[4].innerHTML == player && board[5].innerHTML == player && board[6].innerHTML == player) ||
        (board[7].innerHTML == player && board[8].innerHTML == player && board[9].innerHTML == player) ||
        (board[1].innerHTML == player && board[4].innerHTML == player && board[7].innerHTML == player) ||
        (board[2].innerHTML == player && board[5].innerHTML == player && board[8].innerHTML == player) ||
        (board[3].innerHTML == player && board[6].innerHTML == player && board[9].innerHTML == player) ||
        (board[1].innerHTML == player && board[5].innerHTML == player && board[9].innerHTML == player) ||
        (board[7].innerHTML == player && board[5].innerHTML == player && board[3].innerHTML == player)
        ){
        someoneWon = true;
        winnerName.innerHTML = player + " won!!"
        popUp.style.display = "block"
    }
}
function isItOver() {
    if (someoneWon == false) {
        
    
    if (board[1].innerHTML && board[2].innerHTML && board[3].innerHTML && board[4].innerHTML && board[5].innerHTML && board[6].innerHTML && board[7].innerHTML && board[8].innerHTML && board[9].innerHTML) {
        someoneWon = true
                winnerName.innerHTML = "Game over :("
        popUp.style.display = "block"
        }
    }
}
function clickOnSquare(event) {
    if (!someoneWon) {
        if(!board[event.srcElement.id].innerHTML){
           if (board[0] == false) {
        board[event.srcElement.id].innerHTML = "X"
        didIWin("X")
        isItOver()
        board[0] = true
    } else if (board[0] == true) {
        board[event.srcElement.id].innerHTML = "O"
        didIWin("O")
        isItOver()
        board[0] = false
    } }
    }

}
function resetGame(){
    board[0] = false
    board[1].innerHTML = ""
    board[2].innerHTML = ""
    board[3].innerHTML = ""
    board[4].innerHTML = ""
    board[5].innerHTML = ""
    board[6].innerHTML = ""
    board[7].innerHTML = ""
    board[8].innerHTML = ""
    board[9].innerHTML = ""
    someoneWon = false
            popUp.style.display = "none"

}