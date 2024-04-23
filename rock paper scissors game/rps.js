
let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");


const generatecompchoice =() => {
  const options= ["rock","paper","scissors"];
// generating randomly rock paper scissors
   const ramdomindex= Math.floor(Math.random() *3);
   return options[ramdomindex];
}

const drawgame= () => {
  msg.innerText = "GAME DRAW! PLAY AGAIN";
  msg.style.backgroundColor = "#4a4e69";

}

const showwinner = (playerwin ,userchoice, compchoice) => {
if (playerwin) {
  userScore++;
  userpara.innerText=userScore;
  msg.innerText = `YOU WIN! your ${userchoice} beats ${compchoice}`;
  msg.style.backgroundColor ="#38b000";
}
else {
  compScore++;
  comppara.innerText=compScore;
  msg.innerText =`YOU LOOSE! ${compchoice} beats your ${userchoice}`;
  msg.style.backgroundColor ="red";
}
}


const playgame = (userchoice) => {
// generating computer choice
const compchoice= generatecompchoice(); 


// showing points
if (userchoice===compchoice) {
drawgame();
}

else {
 let playerwin = true; 
 if (userchoice=== "rock") {
  // chances are scissors or paper
playerwin= compchoice === "paper"? false: true;
 }
else if (userchoice=== "paper") {
  // chances are of rock or scissors
playerwin= compchoice ==="scissors"?false:true;
}
else {
// chances are rock or paper
playerwin= compchoice ==="rock"?false:true;
}
showwinner(playerwin, userchoice,compchoice);
}
}


choices.forEach((choice) => {

choice.addEventListener("click", () => {
const userchoice =choice.getAttribute("id");
playgame(userchoice)
})

})