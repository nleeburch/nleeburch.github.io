var player = { x: 1, y: 1, v: 1 };

////////////////////////////////////////////
class Level {
  constructor(room, bullets) {
    this.room = room;
    this.bullets = bullets;
  }
}

var bulletsRoom1 = [
  { x: 4, y: 3, dx: 1, dy: 0, t: 0 },
  { x: 10, y: 7, dx: -1, dy: 0, t: 0 },
  { x: 5, y: 11, dx: 1, dy: 0, t: 0 },
];

let arrayRoom1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//9 = player
/////////////////////////////////////////////

//10 bullets
var bulletsRoom2 = [
  { x: 2, y: 3, dx: 1, dy: 0, t: 0 }, //0
  { x: 2, y: 8, dx: 1, dy: 0, t: 0 }, //1
  { x: 2, y: 12, dx: 1, dy: 0, t: 0 }, //2
  { x: 17, y: 5, dx: -1, dy: 0, t: 0 }, //3
  { x: 17, y: 10, dx: -1, dy: 0, t: 0 }, //4
  { x: 17, y: 14, dx: -1, dy: 0, t: 0 }, //5
  { x: 8, y: 2, dx: 0, dy: 1, t: 0 }, //6
  { x: 15, y: 2, dx: 0, dy: 1, t: 0 }, //7
  { x: 4, y: 17, dx: 0, dy: -1, t: 0 }, //8
  { x: 11, y: 17, dx: 0, dy: -1, t: 0 }, //9
];

//20 x 20
let arrayRoom2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
];
//1 = wall
//2 = eastward turret  (0,1,2)
//3 = westward turret  (3,4,5)
//4 = southward turret (6,7)
//5 = northward turret (8,9)
//9 = player
let Level1 = new Level(arrayRoom1, bulletsRoom1);
let Level2 = new Level(arrayRoom2, bulletsRoom2);

let allLevels = [Level1, Level2];

////////////////////////////////////////////////////

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DrawArray(Level, player) {
  document.body.innerHTML = "";
  let arr = Level.room;
  let bullets = Level.bullets;
  loop1: for (let i = 0; i < arr.length; i++) {
    loop2: for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        if (i == player.x && j == player.y) {
          document.write('<span style="font-family: Noto Mono;">&#68;</span>');
        } else {
          for (let k = 0; k < bullets.length; k++) {
            if (j == bullets[k].x && i == bullets[k].y) {
              printBullet(bullets[k]);
              continue loop2;
              //break out of the loop and perhaps else statement
              //is there a way to iterate the j for-loop?
              //maybe I need a separate function for building shots
              //is there a precedence I am getting wrong?
            }
          }
          document.write('<span style="font-family: Noto Mono;">&nbsp;</span>');
        }
      } else if (arr[i][j] == 1) {
        document.write('<span style="font-family: Noto Mono;">&#124;</span>');
      } else if (arr[i][j] === 2) {
        document.write('<span style="font-family: Noto Mono;">&#125;</span>');
      } else if (arr[i][j] === 3) {
        document.write('<span style="font-family: Noto Mono;">&#123;</span>');
      } else if (arr[i][j] === 4) {
        document.write('<span style="font-family: Noto Mono;">&#86;</span>');
      } else if (arr[i][j] === 5) {
        document.write('<span style="font-family: Noto Mono;">&#94;</span>');
      } else if (arr[i][j] === 8) {
        document.write('<span style="font-family: Noto Mono;">&#45;</span>');
      }
    }
    document.write("<br>");
  }
}

async function MoveStar(Level, player, key) {
  //w
  if (
    key == "w" &&
    (Level.room[player.x - player.v][player.y] < 1 ||
      Level.room[player.x - player.v][player.y] > 7)
  ) {
    player.x -= player.v;
  }
  //a
  else if (
    key == "a" &&
    (Level.room[player.x][player.y - player.v] < 1 ||
      Level.room[player.x][player.y - player.v] > 7)
  ) {
    player.y -= player.v;
  }
  //s
  else if (
    key == "s" &&
    (Level.room[player.x + player.v][player.y] < 1 ||
      Level.room[player.x + player.v][player.y] > 7)
  ) {
    player.x += player.v;
  }
  //d
  else if (
    key == "d" &&
    (Level.room[player.x][player.y + player.v] < 1 ||
      Level.room[player.x][player.y + player.v] > 7)
  ) {
    player.y += player.v;
  }
}

function MoveBullets(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    Level.bullets[i].x += Level.bullets[i].dx;
    Level.bullets[i].y += Level.bullets[i].dy;
    Level.bullets[i].t++;
    if (Level.room[Level.bullets[i].y][Level.bullets[i].x] == 1) {
      Level.bullets[i].x -= Level.bullets[i].dx * Level.bullets[i].t;
      Level.bullets[i].y -= Level.bullets[i].dy * Level.bullets[i].t;
      Level.bullets[i].t = 0;
    }
  }
}

function printBullet(bullet) {
  if (bullet.dx == 0 && bullet.dy > 0) {
    document.write('<span style="font-family: Noto Mono;">&#39;</span>');
  } else if (bullet.dx == 0 && bullet.dy < 0) {
    document.write('<span style="font-family: Noto Mono;">&#46;</span>');
  } else if (Math.abs(bullet.dx) > Math.abs(bullet.dy)) {
    document.write('<span style="font-family: Noto Mono;">&#45;</span>');
  } else if (Math.abs(bullet.dx) < Math.abs(bullet.dy)) {
    document.write('<span style="font-family: Noto Mono;">&#44;</span>');
  }
}

function HitDetection(Level, player) {
  for (let i = 0; i < Level.bullets.length; i++) {
    if (player.y == Level.bullets[i].x && player.x == Level.bullets[i].y) {
      alert("hit");
      player.x = 1;
      player.y = 1;
    }
  }
}

function WinCondition(Level, player) {
  if (Level.room[player.x][player.y] == 8) {
    alert("you wan");
    player.x = 1;
    player.y = 1;
    return true;
  }
  return false;
}

//////////////////////////////////////////////////////////

let interval = 1;

async function GameLoop(levelIndex) {
  let Level = allLevels[levelIndex];
  DrawArray(Level, player);
  document.addEventListener("keydown", (event) => {
    if (interval === 1) {
      MoveStar(Level, player, event.key);
      interval = 0;
    }
  });
  interval = 1;
  HitDetection(Level, player);
  MoveBullets(Level);
  let moveToNextLevel = WinCondition(Level, player);
  if (moveToNextLevel) {
    levelIndex++;
  }
  await sleep(100);
  window.requestAnimationFrame(() => GameLoop(levelIndex));
}

window.requestAnimationFrame(() => GameLoop(0));
