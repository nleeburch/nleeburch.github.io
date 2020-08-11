var player = {x: 1, y: 1, v: 1};
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DrawArray(arr, player) {
  document.body.innerHTML = "";
  for (let i = 0; i < 15; i++) {
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
  if((key == 'w') && (arr[player.x - player.v][player.y] == 0)) {
    player.x -= player.v;
  }
  //a
  else if ((key == 'a') && (arr[player.x][player.y - player.v] == 0)) {
    player.y -= player.v;
  }
  //s
  else if ((key == 's') && (arr[player.x + player.v][player.y] == 0)) { 
    player.x += player.v;
  }
  //d
  else if ((key == 'd') && (arr[player.x][player.y + player.v] == 0)) { 
    player.y += player.v;
  }
}

function MoveBullets(arr, bullets) {
  for(let i = 0; i < 3; i++) {
    if(arr[bullets[i].x + bullets[i].dx] !== 1) {
      bullets[i].x += bullets[i].dx;
      bullets[i].t++;
      console.log("bullets[" + i + "].x = " + bullets[i].x);
    }
    else {
      alert("ELSE");
      let val = (bullets[i].dx * bullets[i].t)
      bullets[i].x -= val;
      bullets[i].t = 0;
      console.log("bullets[" + i + "].t = " + bullets[i].t);
    }
  }
}

//////////////////////////////////////////////////////////

let interval = 1;

async function GameLoop() {
  DrawArray(array, player);
  MoveBullets(array, bullets);
  document.addEventListener("keydown", 
    (event) => { 
      if(interval === 1){
        MoveStar(array, player, event.key); 
        interval = 0; 
      }
    });
  interval = 1;
  await sleep(100);
  window.requestAnimationFrame(GameLoop);
}

window.requestAnimationFrame(GameLoop);
