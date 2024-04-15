list=[1,2,3,4,5,6];
n=Math.floor(Math.random()*6);
m=Math.floor(Math.random()*6);
a=list[n];
b=list[m];
document.querySelector(".img1").setAttribute("src", "./images/dice"+a+".png" );
document.querySelector(".img2").setAttribute("src", "./images/dice"+b+".png" );
if (a>b){
    document.querySelector("h1").textContent="🚩Player 1 wins";

}else if(b>a){
    document.querySelector("h1").textContent="Player 2 wins🚩";

}else{
    document.querySelector("h1").textContent="It is Draw";

}

