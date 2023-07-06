console.log("Welcome to tic tac toe");
let turnMusic = new Audio("ting.mp3");
let gameOverAudio = new Audio("gameover.mp3");
let music = new Audio("music.mp3");
let turn = "x";
let gameOver =  false;

//Checking the turn function
const changeTurn = () => {
    return turn == 'x' ? "o" : "x";
}

//Checking the win function
const checkWin = () => {
    let win = [[0, 1, 2, 0,5,0],
    [3, 4, 5, 0, 15,0],
    [6, 7, 8, 0, 25,0],
    [0, 4, 8,   0, 15,45],
    [2, 4, 6,  0, 15, 135],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90]];
    let box = document.getElementsByClassName("box");
    win.forEach(e=>{
        if(box[e[0]].innerText === box[e[1]].innerText  && box[e[1]].innerText === box[e[2]].innerText && box[e[0]].innerText !== ""){
             document.querySelector(".winInfo").innerText= box[e[1]].innerText + " Won !!";
             document.querySelector(".gif").style.width = '200px';
             gameOver = true;
             gameOverAudio.play();
             document.getElementsByClassName("playerTurn")[0].innerText = " it is " + turn + " turn ";
             document.querySelector(".line").style.transform =`translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
             document.querySelector(".line").style.width="25vw";
        }
    })
}
//  function checkGameOver(){
//     let flag=0;
//     Array.from(box).forEach(e=>{
//         if(e.innerText !== ""){
//            flag++;
//         }
//      })
//      if(flag==9){
//         gameOver=true;
//      }
    
//  }
 
//Game Logic

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let coin = element.querySelector(".coin")
    element.addEventListener("click", () => {
        if (coin.innerText === "" && gameOver == false) {
            coin.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
        }
    });
});

reset.addEventListener("click",()=>{
    // console.log("enterd")
    Array.from(box).forEach(element=>{
        element.querySelector(".coin").innerText="";
    })
    turn = "x";
    document.getElementsByClassName("playerTurn")[0].innerText = " it is " + turn + " turn ";
    document.querySelector(".winInfo").innerText="";
    document.querySelector(".gif").style.width = '0px';
    gameOver=false
    document.querySelector(".line").style.width="0vw";
})