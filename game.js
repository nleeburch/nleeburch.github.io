var player = {x: 1, y: 1, v: 1};
var bullets = [
{x: 3, y: 3, v: 1},
{x: 11, y: 7, v: 1},
{x: 4, y: 11, v: 1},
];

let array = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,2,0,0,0,0,0,0,0,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,0,0,0,0,0,0,0,3,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,2,0,0,0,0,0,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//4 = bullet
//9 = player

function DrawArray(arr, player) {
  document.body.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (arr[i][j] == 1) {
        document.write("<span style=\"font-family: Noto Mono;\">&#124;<\/span>");
      }
      else if (arr[i][j] === 0) { 
        if((i == bullets[0].x) && (j == bullets[0].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if((i == bullets[1].x) && (j == bullets[1].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if((i == bullets[2].x) && (j == bullets[2].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if ((i == player.x) && (j == player.y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#42;<\/span>");
        }
        else {
        document.write("<span style=\"font-family: Noto Mono;\">&nbsp;<\/span>");
        }
      }
      else if (arr[i][j] === 2) {
        document.write("<span style=\"font-family: Noto Mono;\">&#125;<\/span>");
      }
      else if (arr[i][j] === 3) {
        document.write("<span style=\"font-family: Noto Mono;\">&#123;<\/span>");
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
  DrawArray(array, player);
  document.addEventListener("keydown", 
    (event) => { 
      if(interval === 1){
        MoveStar(array, player, event.key); 
        interval = 0; 
      }
    });
  interval = 1;
  await sleep(50);
  window.requestAnimationFrame(GameLoop);
}

GameLoop();
