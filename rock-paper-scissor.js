console.log("Hola mundo");
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return `papel`;
    }
    else if(randomNumber == 1){
        return `piedra`;
    }
    else{
        return `tijera`;
    }
}
      
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice){
        return("Empate!");
    }
    else if(humanChoice == `papel` && computerChoice ==`piedra`){
        return(`Has ganado!`);
    }
    else if(humanChoice == `piedra` && computerChoice ==`tijera`){
        return(`Has ganado!`);
    }
    else if(humanChoice == `tijera` && computerChoice == `papel`){
        return(`Has ganado!`);
    }
    else{
        return(`Has perdido!`);
    }
}

const playedGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    const paperButton = document.querySelector(".paper");
    const rockButton = document.querySelector(".rock");
    const scissorButton = document.querySelector(".scissor");
    const buttonPressed = document.querySelector("button");
    const resultado = document.querySelector(".resultado");
    const cs = document.querySelector(".ComputerScore");
    const hs = document.querySelector(".HumanScore");
    const winnerMessage =  document.querySelector("h1")

    paperButton.addEventListener("click", () => {
        humanChoice = `papel`
        resultado.textContent = `${playRound(humanChoice,computerChoice)}`;
        if(playRound(humanChoice,computerChoice) == "Has ganado!"){
            humanScore++;
        }
        if(playRound(humanChoice,computerChoice) == "Has perdido!"){
            computerScore++; 
        }

        cs.textContent = `Puntuacion de la computadora: ${computerScore}`;
        hs.textContent = `Puntuacion tuya: ${humanScore}`;
    })
    rockButton.addEventListener("click", () => {
        humanChoice = `piedra`;
        resultado.textContent = `${playRound(humanChoice,computerChoice)}`;
                if(playRound(humanChoice,computerChoice) == "Has ganado!"){
            humanScore++;
        }
        if(playRound(humanChoice,computerChoice) == "Has perdido!"){
            computerScore++; 
        }

        cs.textContent = `Puntuacion de la computadora: ${computerScore}`;
        hs.textContent = `Puntuacion tuya: ${humanScore}`;
    })
    scissorButton.addEventListener("click", () => {
        humanChoice = `tijera`;
        resultado.textContent = `${playRound(humanChoice,computerChoice)}`;
        if(playRound(humanChoice,computerChoice) == "Has ganado!"){
            humanScore++;
        }
        if(playRound(humanChoice,computerChoice) == "Has perdido!"){
            computerScore++; 
        }

        cs.textContent = `Puntuacion de la computadora: ${computerScore}`;
        hs.textContent = `Puntuacion tuya: ${humanScore}`;
    })   
    buttonPressed.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        if(humanScore<5 && computerScore<5){
            winnerMessage.textContent = "";
        }
        else if(humanScore>=5){
            winnerMessage.textContent = "Has ganado, enhorabuena!";
            humanScore = 0;
            computerScore = 0;
        }
        else if(computerScore>=5){
            winnerMessage.textContent = "Has perdido, intentalo de nuevo";
            humanScore = 0;
            computerScore = 0;
        }
    })
}

playedGame();
