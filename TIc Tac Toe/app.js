let boxes=document.querySelectorAll(".box");
let resetbutton= document.querySelector("#reset");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;   //player x, player o

let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg.innerText = "";
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
};
const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" &&pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("Winner");
                showWinner(pos1Val);
            }else{
                msg.innerText = `Match is draw. Play Again`;
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
        if(turnO === true){
            box.innerText="O";
            box.style.color = "black";
            turnO = false;
        }else{
            box.innerText="X";
            box.style.color = "Red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

newGameBtn.addEventListener("click" , resetGame);
resetbutton.addEventListener("click" , resetGame);
//knowledge  if(turnO)  ======   if(tunnO === true)