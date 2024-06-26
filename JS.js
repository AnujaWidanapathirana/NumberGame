let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=0;

function checkGuess() {
    const userGuess=document.getElementById('guess').value;
    const message=document.getElementById('message');
    attempts++;
    if(attempts == 20){
        message.textContent = `You weren't able to find the number in 20 attempts.You Have A whole one cell in your brain.:) just give up`;
        message.style.color = 'red';
    }
    l1:if(userGuess==randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        if(attempts==1){
            message2.textContent = `You are the luckiest person Alive.Buy A lottery on your way home.`;
            message2.style.color = 'green';
        }
    }else if (userGuess>randomNumber) {
        if(userGuess-10>randomNumber){
        message.textContent='Not Even Close.Too high! Try again.';
        message.style.color='red';
        break l1; 
        }
        message.textContent='Closer than Ever...A little Lower! Try again.';
        message.style.color='orange';
    }else if(userGuess<randomNumber){
        if(userGuess+10>randomNumber){
            message.textContent='Not Even Close.Too low! Try again.';
            message.style.color='red';
            break l1; 
            }
        message.textContent='Closer than Ever...A little Higer! Try again.';
        message.style.color='orange';
        }
}

function resetGame() {
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=0;
    document.getElementById('guess').value='';
    document.getElementById('message').textContent='';
}