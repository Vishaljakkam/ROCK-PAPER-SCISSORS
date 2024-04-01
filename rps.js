
let userScore=0;
let compScore=0;
let msg=document.querySelector(".msg")
const game=document.querySelectorAll(".choice");
const scoreUser=document.querySelector(".userscore");
const scoreComp=document.querySelector(".compscore");
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        scoreUser.innerHTML=userScore;
        msg.innerHTML=`you win!,your ${userChoice} beats ${compChoice}`;
        console.log("you win!");
    }else{
        compScore++;
        scoreComp.innerHTML=compScore;
        msg.innerHTML=`you lose!,her ${compChoice} beats ${userChoice}`;
        console.log("you lose"); 
    }
};
let getComChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIndex=Math.floor(Math.random()*3);
    return options[ranIndex];
}
let gameDraw=()=>{
    console.log("draw");
    msg.innerHTML="game draw";
}
let playGame=(userChoice)=>{
    const compChoice=getComChoice();
    console.log("computer choice is:",compChoice);
    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ?false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissors"? false:true;
        }
        else {
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
game.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});