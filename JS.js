let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=0;

function checkGuess() {
    const userGuess=document.getElementById('guess').value;
    const message=document.getElementById('message');
    attempts++;
    l1:if(userGuess==randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        if(attempts==1){
            message.textContent = `You are the luckiest person Alive.Buy A lottery on your way home.`;
            message.style.color = 'green';
        }
    }else if (userGuess>randomNumber) {
        if(userGuess-10>randomNumber){
        message.textContent='Not Even Close.Too high! Try again.';
        message.style.color='red';
        break l1; 
        }
        message.textContent='Closer than Ever...A little Higer! Try again.';
        message.style.color='orange';
    }else if(userGuess<randomNumber){
        if(userGuess+10>randomNumber){
            message.textContent='Not Even Close.Too low! Try again.';
            message.style.color='red';
            break l1; 
            }
        message.textContent='Closer than Ever...A little lower! Try again.';
        message.style.color='orange';
    }
}


function resetGame() {
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=0;
    document.getElementById('guess').value='';
    document.getElementById('message').textContent='';
}