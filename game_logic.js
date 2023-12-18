let player_move;
let player_score = 0,cpu_score = 0;

function getComputerChoice()
{
    move = ["Rock", "Paper", "Scissors"];
    //Math.random generates number from 0, Math.floor rounds the number down to the nearest whole number
    random_number = Math.floor(Math.random() * 3);
    //Math.random() generates number from [0,1], so the above will generate numbers from [0,3). 3 is exclusive, 
    //line 5 gives 0,1 or 2
    return move[random_number]
}

// console.log(getComputerChoice()); testing purposes
function playerSelection(e)
{
    let clicked_button = e.target.id;

    // console.log(clicked_button);

    if (clicked_button == "rock") {
        // console.log("rock");
        return "rock"
    }
    else if (clicked_button == "paper"){
        //console.log("paper"); //test
        return "paper"
    }
    else {
        //console.log("scissors"); //test
        return "scissors"
    }
}

function playRound(cpu_move, player_move)
{
    if (cpu_move.toUpperCase() == "ROCK" && player_move.toUpperCase() == "PAPER")
    {
        return "CPU picked " + cpu_move + ". You win! Paper beats Rock"
    } 
    else if (cpu_move.toUpperCase() == "ROCK" && player_move.toUpperCase() == "SCISSORS")
    {
        return "CPU picked " + cpu_move + ". You lose! Rock beats Scissors"
    } 
    else if (cpu_move.toUpperCase() == "ROCK" && player_move.toUpperCase() == "ROCK")
    {
        return "CPU picked " + cpu_move + ". That's a draw!"
    } 
    else if (cpu_move.toUpperCase() == "PAPER" && player_move.toUpperCase() == "ROCK")
    {
        return "CPU picked " + cpu_move + ". You lose! Paper beats Rock"
    } 
    else if (cpu_move.toUpperCase() == "PAPER" && player_move.toUpperCase() == "PAPER")
    {
        return "CPU picked " + cpu_move + ". That's a draw!"
    } 
    else if (cpu_move.toUpperCase() == "PAPER" && player_move.toUpperCase() == "SCISSORS")
    {
        return "CPU picked " + cpu_move + ". You win! Scissors beats Paper"
    } 
    else if (cpu_move.toUpperCase() == "SCISSORS" && player_move.toUpperCase() == "ROCK")
    {
        return "CPU picked " + cpu_move + ". You win! Rock beats Scissors"
    } 
    else if (cpu_move.toUpperCase() == "SCISSORS" && player_move.toUpperCase() == "PAPER")
    {
        return "CPU picked " + cpu_move + ". You lose! Scissors beats Paper"
    } 
    else if (cpu_move.toUpperCase() == "SCISSORS" && player_move.toUpperCase() == "SCISSORS")
    {
        return "CPU picked " + cpu_move + ". That's a draw"
    } 
    else
    {
        return "Please enter an input of rock, paper or scissors"
    }
}
// console.log(playRound(getComputerChoice(),playerSelection()))

function game(player_move)
{   
  
    outcome = playRound(getComputerChoice(),player_move);
    
    if (outcome.includes("win")) //checks if playRound() returns user or cpu winning and increment accordingly
    {
        return "Player wins"
    }
    else
    {
        return "CPU wins"
    }

    // console.log("Player score : " + player_score + ". CPU score : " + cpu_score);

    // if (player_score > cpu_score)
    // {
    //     console.log("You win!");
    //     return player_score;
    // }
    // else
    // {

    //     console.log("You lost!");
    //     return cpu_score;
    // }
}


// Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a 
// button is clicked. (you can keep the console.logs for this step)

const rock_btn = document.createElement("button");
rock_btn.textContent = "Rock";
rock_btn.setAttribute("id","rock");

const paper_btn = document.createElement("button");
paper_btn.textContent = "Paper";
paper_btn.setAttribute("id","paper");

const scissors_btn = document.createElement("button");
scissors_btn.textContent = "Scissors";
scissors_btn.setAttribute("id","scissors");

document.body.appendChild(rock_btn);
document.body.appendChild(paper_btn);
document.body.appendChild(scissors_btn);


rock_btn.addEventListener('click', playerSelection);
paper_btn.addEventListener('click', playerSelection);
scissors_btn.addEventListener('click', playerSelection);

var reply_click = function()
{
    // console.log(this.id)
    player_move = this.id;
    console.log(player_move);

    if (game(player_move) == "Player wins")
    {
        player_score += 1;
    } 
    else
    {
        cpu_score += 1;
    }
    console.log("Player score: " + player_score);
    console.log("CPU score: " + cpu_score);

    if(cpu_score + player_score == 5) {
        let winner = "";
        if (cpu_score > player_score) {
            winner = "CPU";
        }
        else {
            winner = "You"
        }
        alert("5 Rounds are over, the winner is " + winner + "!");
        cpu_score = 0;
        player_score = 0;
    }

}

rock_btn.onclick = reply_click;
paper_btn.onclick = reply_click;
scissors_btn.onclick = reply_click;


// console.log(getComputerChoice());
// console.log(playerSelection());
//game(); //calling the "main function"