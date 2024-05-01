let userScore=0;
let compScore=0;

let choice=document.querySelectorAll(".b1");
let para=document.querySelector(".pe");
let pdiv=document.querySelector(".d");
let score=document.querySelector("#c11");
let score2=document.querySelector("#c22");

const compRandom=()=>{
    const choice=["rock","paper","scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return choice[randomIdx];
}

const draw=()=>{
    console.log("the game was draw...");
    para.innerHTML="Game was draw!!play again...";
    para.style.backgroundColor="#081b31";   

}

const showWiner=(userWin)=>{
    if(userWin){
        userScore++;
        score.innerHTML=userScore;
        console.log("you win!!");
        para.innerHTML="you win!!";
        para.style.backgroundColor="green";
    }else{
        compScore++;
        score2.innerHTML=compScore;
        console.log("you lose!!");
        para.innerHTML="you loss!!";
        para.style.backgroundColor="red";
    }
}

let playGame=(userChoice)=>{
console.log("User choice",userChoice);

const computerChoice=compRandom();
console.log("computer choice",computerChoice);

if(userChoice===computerChoice){
    draw();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        // paper , scissor
        userWin = computerChoice==="paper"? false : true;
    }else if(userChoice==="paper"){
        // rock, scissor
        userWin = computerChoice==="scissor"?false : true;
    }else{
        // rock,paper
        userWin= computerChoice==="paper" ? true: false;
    }
    showWiner(userWin);
}

}

choice.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
// console.log("click this button...",userChoice);
      playGame(userChoice)
     })
})