let p1 = "X".fontcolor("red"),
    p2 = "O".fontcolor("green"),
    turn = 0;
    winner = null,
    square = document.getElementsByClassName("square"),
    msg = document.getElementById('message');

const btn = document.getElementById('btn');

for (let i = 0; i < square.length; i++) {
        
    square[i].addEventListener('click', function () {
        if (square[i].innerHTML == p1 || square[i].innerHTML == p2) {
            msg.innerText = "Избери друга позиция";
            checkWinner(winner);
            checkTie();
        } else if (checkWinner(winner)) {
        } else if (checkTie()) {
        } else if (turn % 2 === 0) {
            square[i].innerHTML = p1;
            turn++;
            msg.innerHTML = "Ред е на " + p2;
            checkWinner(winner);
            checkTie();
        } else {
            square[i].innerHTML = p2;
            turn++;
            msg.innerHTML = "Ред е на " + p1;
            checkWinner(winner);
            checkTie();
        }
    }, false); 

    btn.addEventListener('click', function() {
        square[i].innerText = "";
        msg.innerText = "Да започваме!";
        turn = 0;
    },false);

    function checkWinner() {
        winner = null;
        if (square[0].innerHTML == p1 && square[1].innerHTML == p1 && square[2].innerHTML == p1 ||
            square[3].innerHTML == p1 && square[4].innerHTML == p1 && square[5].innerHTML == p1 ||
            square[6].innerHTML == p1 && square[7].innerHTML == p1 && square[8].innerHTML == p1 ||
            square[0].innerHTML == p1 && square[3].innerHTML == p1 && square[6].innerHTML == p1 ||
            square[1].innerHTML == p1 && square[4].innerHTML == p1 && square[7].innerHTML == p1 ||
            square[2].innerHTML == p1 && square[5].innerHTML == p1 && square[8].innerHTML == p1 ||
            square[0].innerHTML == p1 && square[4].innerHTML == p1 && square[8].innerHTML == p1 ||
            square[2].innerHTML == p1 && square[4].innerHTML == p1 && square[6].innerHTML == p1) {
                msg.innerHTML = "Поздравления " + p1 + " ти спечели !";
                winner = true;
        } else if (square[0].innerHTML == p2 && square[1].innerHTML == p2 && square[2].innerHTML == p2 ||
            square[3].innerHTML == p2 && square[4].innerHTML == p2 && square[5].innerHTML == p2 ||
            square[6].innerHTML == p2 && square[7].innerHTML == p2 && square[8].innerHTML == p2 ||
            square[0].innerHTML == p2 && square[3].innerHTML == p2 && square[6].innerHTML == p2 ||
            square[1].innerHTML == p2 && square[4].innerHTML == p2 && square[7].innerHTML == p2 ||
            square[2].innerHTML == p2 && square[5].innerHTML == p2 && square[8].innerHTML == p2 ||
            square[0].innerHTML == p2 && square[4].innerHTML == p2 && square[8].innerHTML == p2 ||
            square[2].innerHTML == p2 && square[4].innerHTML == p2 && square[6].innerHTML == p2) {
                msg.innerHTML = "Поздравления " + p2 + " ти спечели !";
                winner = true;
            } 
            return winner;
    }
    function checkTie () {
        if (turn === 9 && checkWinner() != (p1 || p2)) {
        msg.innerHTML = "Равенство"
        }
    }
}
        


