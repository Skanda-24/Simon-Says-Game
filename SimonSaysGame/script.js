let game=[];
let user=[];
let level=0;
let start=false;
let colors=["r","g","b","y"];
let highscore=0;
let high=[];

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();

    }
});

function gameflash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250);
}
function keyflash(btn){
    btn.classList.add("green");
    setTimeout(function(){
        btn.classList.remove("green");
    },250);
}
function wrongflash(btn){
    btn.classList.add("red");
    setTimeout(function(){
        btn.classList.remove("red");
    },250);
}

function levelUp(){
    user=[];
    level++;
    result=document.querySelector("h2");
    result.innerText =`Level ${level} \n High Score-${highscore}`;

    let randind=Math.floor(Math.random() * 4);
    let randcolor=colors[randind];
    let btn=document.querySelector(`.${randcolor}`);
    game.push(randcolor);
    gameflash(btn);
}

function checking(ind){
    if(game[ind] === user[ind]){
        if(game.length == user.length){
            levelUp();
        }
    }
    else{
        page=document.querySelector("body");
        wrongflash(page);
        result=document.querySelector("h2");
        high.push(level);
        highscore=Math.max(...high)
        result.innerText =`Game over \n Current level - ${level}\n High Score- ${highscore} `; 
        reset();       
    }
}

function pressKey(){
   let btn=this;
   keyflash(btn);
  
   user_pressedKey=btn.getAttribute("id");
   user.push(user_pressedKey);
   checking(user.length-1);   
}

function reset(){
    start=false;
    level=0;
    game=[];
    user=[];
}

let pressed=document.querySelectorAll(".btn");
for (press of pressed){
    press.addEventListener("click",pressKey);
}