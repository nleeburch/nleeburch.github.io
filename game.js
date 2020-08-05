var player = {x: 1, y: 1, vel: 1};

let array = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function DrawArray(arr, player) {
  document.body.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (arr[i][j] == 1) {
        document.write("<span style=\"font-family: Noto Mono;\">&#124;<\/span>");
      }
      else if (arr[i][j] === 0) {
        if ((i == player.x) && (j == player.y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#42;<\/span>");
        }
	else {
        document.write("<span style=\"font-family: Noto Mono;\">&nbsp;<\/span>");
        }
      }
      else if (arr[i][j] === 2) {
        document.write("<span style=\"font-family: Noto Mono;\">&#120;<\/span>");
      }
    }
    document.write("<br>");
  }
}

function MoveStar(arr, player, keyCode) {
  //w 
  if((keyCode == 87) && (arr[player.x - 1][player.y] != 1)) {
    player.x -= 1;
  }
  //a
  else if ((keyCode == 65) && (arr[player.x][player.y - 1] != 1)) {
    player.y -= 1;
  }
  //s
  else if ((keyCode == 83) && (arr[player.x + 1][player.y] != 1)) { 
    player.x += 1;
  }
  //d
  else if ((keyCode == 68) && (arr[player.x][player.y + 1] != 1)) { 
    player.y += 1;
  }
  window.requestAnimationFrame(GameLoop);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//////////////////////////////////////////////////////////

async function GameLoop(){
  DrawArray(array, player);
  await sleep(111);
  //window.addEventListener("click", function() { alert("x = " + player.x + "   y = " + player.y); });
  window.addEventListener("keydown", (event) => MoveStar(array, player, event.keyCode));
  //now it is accelerating
}

window.requestAnimationFrame(GameLoop);