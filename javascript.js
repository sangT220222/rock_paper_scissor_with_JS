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
    return prompt("Please pick either rock, paper or scissors below")
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
console.log(playRound(getComputerChoice(),playerSelection()))