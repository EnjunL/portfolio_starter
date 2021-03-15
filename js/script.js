let playernow = "X";
let totalturns = 0;
let gameover = false;
function oneStep(button, tile) {
  $(button).hide();
  $(tile).html(playernow);
  check("#tile1", "#tile2", "#tile3");
  totalturns = totalturns + 1;
  checkVertical();
  checkHorizontal();
  checkDiagonal();
  checkTie();
  toggleplayer();
}
function toggleplayer() {
  console.log("toggling player");
  if (playernow === "X") {
    playernow = "O";
  } else {
    playernow = "X";
  }
}
function check(tileA, tileB, tileC) {
  let valueA = $(tileA).html();
  let valueB = $(tileB).html();
  let valueC = $(tileC).html();
  //console.log(valueA, valueB, valueC);
  if (valueA === playernow && valueB === playernow && valueC === playernow) {
    console.log(playernow + " won");
    gameover = true;
    $("h1").text(playernow + " won!" + " Game Over");
  }
  //return
}
function checkTie() {
  console.log(totalturns);
  if (totalturns === 9 && gameover === false) {
    console.log("Tied");
    $("h1").text("Tied," + " Game Over");
  }
}
function checkVertical() {
  check("#tile1", "#tile4", "#tile7");
  check("#tile2", "#tile5", "#tile8");
  check("#tile3", "#tile6", "#tile9");
}
function checkHorizontal() {
  check("#tile1", "#tile2", "#tile3");
  check("#tile4", "#tile5", "#tile6");
  check("#tile7", "#tile8", "#tile9");
}
function checkDiagonal() {
  check("#tile1", "#tile5", "#tile9");
  check("#tile3", "#tile5", "#tile7");
}
$("#button1").click(function() {
  oneStep("#button1", "#tile1");
});

$("#button2").click(function() {
  oneStep("#button2", "#tile2");
});

$("#button3").click(function() {
  oneStep("#button3", "#tile3");
});

$("#button4").click(function() {
  oneStep("#button4", "#tile4");
});

$("#button5").click(function() {
  oneStep("#button5", "#tile5");
});

$("#button6").click(function() {
  oneStep("#button6", "#tile6");
});

$("#button7").click(function() {
  oneStep("#button7", "#tile7");
});

$("#button8").click(function() {
  oneStep("#button8", "#tile8");
});

$("#button9").click(function() {
  oneStep("#button9", "#tile9");
});



//function sayHello(name) {
//  console.log("Hi " + name);
//}
//sayHello("Mich"); // "Hi Mich"
