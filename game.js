var player = {x: 1, y: 7, v: 1};
var bullets = [
{x: 4, y: 3, dx: 1, t: 0},
{x: 10, y: 7, dx: -1, t: 0},
{x: 5, y: 11, dx: 1, t: 0},
];

let array = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,2,0,0,0,0,0,0,0,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,0,0,0,0,0,3,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,2,0,0,0,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
[1,1,1,1,1,1,8,8,8,1,1,1,1,1,1]
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//4 = bullet
//9 = player

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DrawArray(arr, player) {
  document.body.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 15; j++) {
      if (arr[i][j] == 1) {
        document.write("<span style=\"font-family: Noto Mono;\">&#124;<\/span>");
      }
      else if (arr[i][j] === 0) { 
        if((j == bullets[0].x) && (i == bullets[0].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if((j == bullets[1].x) && (i == bullets[1].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if((j == bullets[2].x) && (i == bullets[2].y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
        }
        else if ((i == player.x) && (j == player.y)) {
        document.write("<span style=\"font-family: Noto Mono;\">&#68;<\/span>");
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
      else if (arr[i][j] === 8) {
        document.write("<span style=\"font-family: Noto Mono;\">&#45;<\/span>");
      }
    }
    document.write("<br>");
  }
}

async function MoveStar(arr, player, key) {
  //w 
  if ((key == 'w') 
      && ((arr[player.x - player.v][player.y] < 1)
      || (arr[player.x - player.v][player.y] > 7))) {
    player.x -= player.v;
  }
  //a
  else if ((key == 'a') 
           && ((arr[player.x][player.y - player.v] < 1)
           || (arr[player.x][player.y - player.v] > 7))) {
    player.y -= player.v;
  }
  //s
  else if ((key == 's') 
           && ((arr[player.x + player.v][player.y] < 1) 
           || (arr[player.x + player.v][player.y] > 7))) { 
    player.x += player.v;
  }
  //d
  else if ((key == 'd') 
           && ((arr[player.x][player.y + player.v] < 1) 
           || (arr[player.x][player.y + player.v] > 7))) { 
    player.y += player.v;
  }
  
}

function MoveBullets(arr, bullets) {
  for(let i = 0; i < 3; i++) {
    if(arr[bullets[i].y][bullets[i].x + bullets[i].dx] !== 1) {
      bullets[i].x += bullets[i].dx;
      bullets[i].t++;
      //console.log("bullets[" + i + "].x = " + bullets[i].x);
    }
    else {
      bullets[i].x -= (bullets[i].dx * bullets[i].t);
      bullets[i].t = 0;
    }
  }
}

function HitDetection(player, bullets) {
  for(let i = 0; i < 3; i++) {
    if((player.y == bullets[i].x) && (player.x == bullets[i].y)) {
    player.x = 1;
    player.y = 7;
    }
  }
}

function WinCondition(arr, player) {
  if(arr[player.x][player.y] == 8) {
    alert("you wan");
    player.x = 1;
    player.y = 7;
  }
}

//////////////////////////////////////////////////////////

let interval = 1;

async function GameLoop_1() {
  DrawArray(array, player);
  document.addEventListener("keydown", 
    (event) => { 
      if(interval === 1){
        MoveStar(array, player, event.key); 
        interval = 0; 
      }
    });
  interval = 1;
  HitDetection(player, bullets);
  MoveBullets(array, bullets);
  WinCondition(array, player);
  await sleep(100);
  window.requestAnimationFrame(GameLoop_1);
}

window.requestAnimationFrame(GameLoop_1);
