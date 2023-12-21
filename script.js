let arr = ['stone' , 'paper' , 'scissor'];
let human = '0';
let computer='0';
let human_selection = document.getElementById('winner').src;
console.log(human_selection)

let computerScore =  localStorage.getItem('computerScore') || 0;
let humanScore = localStorage.getItem('humanScore') || 0;

document.getElementById('humanScore').innerText =     humanScore;
document.getElementById('computerScore').innerText =     computerScore;
document.getElementById('rules_box').style.display='none';
document.getElementById('win_screen').style.display = 'none';
document.getElementById('next').style.display = 'none';




//human choice
function clicked (res) {
close_box();
computer = arr[Math.floor(Math.random() * 3)];
human = res;
compare();
document.getElementById('human').src = './images/'+human+'.png';
document.getElementById('computer').src = './images/'+computer+'.png';
document.getElementById('imageBox').style.display = 'none';
document.getElementById('win_screen').style.display = 'block';
document,getElementById('human').src = ""
}


function compare () { 
if(human ==  computer){
        document.getElementById('winner').innerHTML = 'Tie';
        console.log("computer = "+ computer)
        console.log("human = "+ human)
        document.getElementById('next').style.display = 'none';

}
else{
    if(human == 'stone' && computer == 'scissor' || human == 'scissor' && computer == 'paper' || human == 'paper' && computer == 'stone' ){
        document.getElementById('winner').innerHTML = 'Human Wins';
        console.log("computer = "+ computer)
        console.log("human = "+ human)
        humanScore++;
        document.getElementById('next').style.display = 'flex';
        document.getElementById('humanScore').innerHTML =     humanScore;
        localStorage.setItem("humanScore" , humanScore);

        }
else{
    document.getElementById('winner').innerHTML = "Computer Wins"
    console.log("computer = "+ computer)
    console.log("human = "+ human)
    computerScore++;
    document.getElementById('computerScore').innerHTML =     computerScore;
    localStorage.setItem("computerScore" , computerScore);
    document.getElementById('next').style.display = 'none';

}
}
}


function playagain () {
    document.getElementById('imageBox').style.display = 'flex';
    document.getElementById('win_screen').style.display = 'none';
     computer = arr[Math.floor(Math.random() * 3)];
     close_box();
     document.getElementById('next').style.display = 'none';

}



function display_rules () {
    document.getElementById('rules_box').style.display='block';
    document.getElementById('close_button').style.display-'flex';
}

function close_box () {
    document.getElementById('rules_box').style.display='none';
}
 


