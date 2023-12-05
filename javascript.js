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
function playerSelection()
{
    return prompt("Please pick either rock, paper or scissors below") //interactive prompt to allow users' input
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

function game()
{   
    var player_score = 0, i = 0, cpu_score = 0;
    while (i < 5)
    {
        outcome = playRound(getComputerChoice(),playerSelection());
        if (outcome.includes("win")) //checks if playRound() returns user or cpu winning and increment accordingly
        {
            player_score += 1;
        }
        else
        {
            cpu_score += 1;
        }

        i+=1;
    }

    console.log("Player score : " + player_score + ". CPU score : " + cpu_score);

    if (player_score > cpu_score)
    {
        console.log("You win!");
        return player_score;
    }
    else
    {

        console.log("You lost!");
        return cpu_score;
    }
}

game(); //calling the "main function"