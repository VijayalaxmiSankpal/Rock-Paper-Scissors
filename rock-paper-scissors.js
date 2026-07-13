let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let beat = document.querySelector("#beat");
let beatmsg=document.querySelector(".beat-msg");
let usercount=document.querySelector("#user");
let compcount=document.querySelector("#comp");
let newgame=document.querySelector("#newgame");

let userScore = 0;
let compScore = 0;

const newGame=()=>{
    userScore=0;
    compScore=0;
    usercount.innerText=userScore;
    compcount.innerText=compScore;
    beatmsg.classList.add("hide");
    msg.innerText="New Game has Started, you can play your move";
    msg.style.color = "black";
}
newgame.addEventListener("click",newGame);

const drawGame = (userChoice, compChoice) => {
    msg.innerHTML = `Game was <b>Draw!</b> Play Again`;
    msg.style.color = "black";
    beat.innerHTML = `Your Choice as well as Computer's choice was same as <i>${compChoice}</i>`
    beatmsg.classList.remove("hide");
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        usercount.innerText=userScore;
        msg.innerHTML = `<b>You Win!</b>${userChoice} beats ${compChoice}`;
        msg.style.color = "#10801dff";
        beat.innerHTML = `Your Choice was <i>${userChoice}</i> and Computer's Choice was <i>${compChoice}</i>`
        beatmsg.classList.remove("hide");
    } else {
        compScore++;
        compcount.innerText=compScore;
        msg.innerHTML = `<b>You lose!</b> ${compChoice} beats ${userChoice}`;
        msg.style.color = "#9a2d2dff";
        beat.innerHTML = `Your Choice was <i>${compChoice}</i> and Computer's Choice was <i>${userChoice}</i>`
        beatmsg.classList.remove("hide");
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame(userChoice,compChoice);
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});