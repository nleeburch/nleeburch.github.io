var player = {x: 1, y: 1, v: 1};

////////////////////////////////////////////
var bulletsRoom1 = [
{x: 4, y: 3, dx: 1, t: 0},
{x: 10, y: 7, dx: -1, t: 0},
{x: 5, y: 11, dx: 1, t: 0},
];

let arrayRoom1 = [
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
//9 = player
/////////////////////////////////////////////

//10 bullets
var bulletsRoom2 = [
{x: 1, y: 3, dx: 1, dy: 0, t: 0},  //0
{x: 1, y: 8, dx: 1, dy: 0, t: 0},  //1
{x: 1, y: 12, dx: 1, dy: 0, t: 0},  //2
{x: 18, y: 5, dx: -1, dy: 0, t: 0}, //3
{x: 18, y: 10, dx: -1, dy: 0, t: 0}, //4
{x: 18, y: 14, dx: -1, dy: 0, t: 0}, //5
{x: 8, y: 1, dx: 0, dy: 1, t: 0},  //6
{x: 15, y: 1, dx: 0, dy: 1, t: 0},  //7
{x: 4, y: 18, dx: 0, dy: -1, t: 0}, //8
{x: 11, y: 18, dx: 0, dy: -1, t: 0}  //9
];

//20 x 20
let arrayRoom2 = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
[1,0,0,0,5,0,0,0,0,0,0,5,0,0,0,1,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1]
];
//1 = wall
//2 = eastward turret  (0,1,2)
//3 = westward turret  (3,4,5)
//4 = southward turret (6,7)
//5 = northward turret (8,9)
//9 = player
////////////////////////////////////////////////////

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DrawArray(arr, player, bullet) {
  document.body.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) { 
        if ((i == player.x) && (j == player.y)) {
          document.write("<span style=\"font-family: Noto Mono;\">&#68;<\/span>");
        }
        else {
	  for (let i = 0; i < bullet.length; i++) {
            if ((j == bullet[i].x) && (i == bullet[i].y)) {
               //callfunction printBullet(); which takes the bullet object and based on its                //qualities prints a particular sprite
               break; //break out of the loop and perhaps else statement
            }
          }
          //this will trigger if the for loop is completely cycled through and resultless
          document.write("<span style=\"font-family: Noto Mono;\">&nbsp;<\/span>");
        }
      }
      else if (arr[i][j] == 1) {
        document.write("<span style=\"font-family: Noto Mono;\">&#124;<\/span>");
      }
      else if (arr[i][j] === 2) {
        document.write("<span style=\"font-family: Noto Mono;\">&#125;<\/span>");
      }
      else if (arr[i][j] === 3) {
        document.write("<span style=\"font-family: Noto Mono;\">&#123;<\/span>");
      }
      else if (arr[i][j] === 4) {
        document.write("<span style=\"font-family: Noto Mono;\">&#86;<\/span>");
      }
      else if (arr[i][j] === 5) {
        document.write("<span style=\"font-family: Noto Mono;\">&#94;<\/span>");
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

function MoveBullets(arr, bullet) {
  for(let i = 0; i < bullet.length; i++) {
    if(arr[bullet[i].y][bullet[i].x + bullet[i].dx] !== 1) {
      bullet[i].x += bullet[i].dx;
      bullet[i].t++;
    }
    else if(arr[bullet[i].y + bullet[i].dy][bullet[i].x] !== 1) {
      bullet[i].y += bullet[i].dy;
      bullet[i].t++;
    }
    else {
      bullet[i].x -= (bullet[i].dx * bullet[i].t);
      bullet[i].y -= (bullet[i].dy * bullet[i].t);
      bullet[i].t = 0;
    }
  }
}

function HitDetection(player, bullet) {
  for(let i = 0; i < 3; i++) {
    if((player.y == bullet[i].x) && (player.x == bullet[i].y)) {
    player.x = 1;
    player.y = 7;
    }
  }
}

function WinCondition(arr, player) {
  if(arr[player.x][player.y] == 8) {
    alert("you wan");
    player.x = 1;
    player.y = 1;
    window.requestAnimationFrame(GameLoop_2);
  }
}

//////////////////////////////////////////////////////////

let interval = 1;

async function GameLoop_1() {
  DrawArray(arrayRoom1, player, bulletsRoom1);
  document.addEventListener("keydown", 
    (event) => { 
      if(interval === 1){
        MoveStar(arrayRoom1, player, event.key); 
        interval = 0; 
      }
    });
  interval = 1;
  HitDetection(player, bulletsRoom1);
  MoveBullets(arrayRoom1, bulletsRoom1);
  WinCondition(arrayRoom1, player);
  await sleep(100);
  window.requestAnimationFrame(GameLoop_1);
}

async function GameLoop_2() {
  DrawArray(arrayRoom2, player, bulletsRoom2);
  document.addEventListener("keydown", 
    (event) => { 
      if(interval === 1){
        MoveStar(arrayRoom2, player, event.key); 
        interval = 0; 
      }
    });
  interval = 1;
  HitDetection(player, bulletsRoom2);
  MoveBullets(arrayRoom2, bulletsRoom2);
  WinCondition(arrayRoom2, player);
  await sleep(100);
  window.requestAnimationFrame(GameLoop_2);
}

window.requestAnimationFrame(GameLoop_2);

