

var player1 = prompt('enter player1 name');
var player2 = prompt('enter player2 name');

document.querySelector('.btn').addEventListener("click",function(){

  var ranNum1 = Math.floor(Math.random()*6)+1;

  var ranNum2 = Math.floor(Math.random()*6)+1;

  var ranSrc1 = "images/dice"+ranNum1+".png";

  var ranSrc2 = "images/dice"+ranNum2+".png";

  document.querySelectorAll('img')[0].setAttribute("src",ranSrc1);

  document.querySelectorAll('img')[1].setAttribute("src",ranSrc2);

  if (ranNum1 > ranNum2) {
    document.querySelector('h1').innerText = player1 + " wins";
  } else if (ranNum1 < ranNum2) {
    document.querySelector('h1').innerText = player2 + " wins";
  } else {
    document.querySelector('h1').innerText = "its a tie";
  }});

document.querySelectorAll('.btn')[1].addEventListener("click",function refresh(){
        window.location.reload("Refresh")
      });
