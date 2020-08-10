var player = {x: 1, y: 1, v: 1};

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

async function MoveStar(arr, player, key) {
  //w 
  if((key == 'w') && (arr[player.x - player.v][player.y] != 1)) {
    player.x -= player.v;
  }
  //a
  else if ((key == 'a') && (arr[player.x][player.y - player.v] != 1)) {
    player.y -= player.v;
  }
  //s
  else if ((key == 's') && (arr[player.x + player.v][player.y] != 1)) { 
    player.x += player.v;
  }
  //d
  else if ((key == 'd') && (arr[player.x][player.y + player.v] != 1)) { 
    player.y += player.v;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//////////////////////////////////////////////////////////

let interval = 1;

async function GameLoop(){
document.addEventListener("keydown", 
  (event) => { 
    if(interval === 1){
      MoveStar(array, player, event.key); 
      DrawArray(array, player);
      interval = 0; 
    }
  });
  interval = 1;
  await sleep(5);
  window.requestAnimationFrame(GameLoop);
}

DrawArray(array, player);
GameLoop();
