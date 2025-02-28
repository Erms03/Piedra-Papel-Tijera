
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

const getHumanChoice = () => {
    let message = "Elija piedra, papel o tijera"
    while(true){
        const promptChoice = prompt(message)
        switch(promptChoice){
            case("piedra"):return promptChoice;
            case("papel"):return promptChoice;
            case("tijera"):return promptChoice; 
            case(null):return "Eleccion cancelada por el usuario";
        }
        message = "Palabra equivocada, elige nuevamente";
    }
} 
      
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice){
        return("Empate!");
    }
    else if(humanChoice == `papel` && computerChoice ==`piedra`){
        return(`Ganas!`);
    }
    else if(humanChoice == `piedra` && computerChoice ==`tijera`){
        return(`Ganas!`);
    }
    else if(humanChoice == `tijera` && computerChoice == `papel`){
        return(`Ganas!`);
    }
    else{
        return(`Pierdes!`);
    }
}

const playedGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let i=0;
    while(humanScore < 3 && computerScore <3){
        console.log(`Round ${i}`)
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const resultWinMessage = `El ${humanChoice} le gana a ${computerChoice}`;
        const resultLoseMessage = `El ${humanChoice} pierde contra ${computerChoice}`;
        
        if(humanChoice == "Eleccion cancelada por el usuario"){
            computerScore++;
            break;
        }
        else if(playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase()) == `Ganas!`){
            console.log(`Ganas! ${resultWinMessage}`)
            humanScore++;
        }
        else if(playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase()) == `Pierdes!`){
            console.log(`Pierdes! ${resultLoseMessage}`)
            computerScore++;
        }
        else{
            console.log(`Empate!`)
        }
        console.log(`Tu puntuacion: ${humanScore}`);
        console.log(`Puntuacion de la computadora: ${computerScore}`) 
        i++;
    }  
    console.log(humanScore>computerScore?`Ganaste`:`Gana la computadora`);   
}

playedGame();
