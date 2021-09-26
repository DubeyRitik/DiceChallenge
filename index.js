var p1=Math.floor(((Math.random())*6)+1);
var p2=Math.floor(((Math.random())*6)+1);

var whichPlayer;

function imageSelector(whichPlayer)
{
    if(whichPlayer===1)
    {
        return "images/dice1.png"
    }
    else if (whichPlayer===2)
    {
        return "images/dice2.png"
    }
    
    else if (whichPlayer===3)
    {
        return "images/dice3.png"
    }
    
    else if (whichPlayer===4)
    {
        return "images/dice4.png"
    }
    
    else if (whichPlayer===5)
    {
        return "images/dice5.png"
    }
    
    else
    {
        return "images/dice6.png"
    }
    
}


var a= imageSelector(p1);
var b= imageSelector(p2);

if (a>b)
{
var result = "Player 1 Wins"
}

else if (a<b)
{
var result = "Player 2 Wins"
}

else
{
var result = "Draw"
}




document.getElementsByClassName("img1")[0].setAttribute("src",a);
document.getElementsByClassName("img2")[0].setAttribute("src",b);

document.querySelector("h1").innerHTML=result;