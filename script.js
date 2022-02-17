// alert("HELLO");
var randomno1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomno1+".png";
var randomDiceImage="images/"+randomImage;


var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);


var randomno2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="images/dice"+randomno2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
if(randomno1===randomno2){
    document.querySelector("h1").innerHTML="🚩 MATCH IS DRAWN 🚩";
}
else if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="🚩Player 1 is Winner";
}

else{
    document.querySelector("h1").innerHTML="Player 2 is winner🚩";

}