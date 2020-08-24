var draw = SVG("game").size(500, 500);
var px = 20;
////////////////////////////////////////////

var player = { x: 1, y: 1, v: 1 };

////////////////////////////////////////////
class Level {
  constructor(room, bullets) {
    this.room = room;
    this.bullets = bullets;
  }
}

var bulletsRoom1 = [
  { x: 4, y: 3, dx: 0.5, dy: 0, t: 0 },
  { x: 9, y: 7, dx: -0.5, dy: 0, t: 0 },
  { x: 6, y: 11, dx: 0.5, dy: 0, t: 0 },
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
  loop1: for (let i = 0; i < Level.room.length; i++) {
    loop2: for (let j = 0; j < Level.room[0].length; j++) {
      if (Level.room[i][j] === 0) {
        if (i == player.x && j == player.y) {
          draw
            .rect(px / 2, px / 2)
            .x(j * px + 3)
            .y(i * px + 3);
        } else {
          for (let k = 0; k < Level.bullets.length; k++) {
            if (
              j == Math.floor(Level.bullets[k].x) &&
              i == Math.floor(Level.bullets[k].y)
            ) {
              printBullet(Level.bullets[k], i, j);
              continue loop2;
            }
          }
          draw
            .rect(px, px)
            .fill("#ffffff")
            .x(j * px)
            .y(i * px);
        }
      } else if (Level.room[i][j] == 1) {
        draw
          .rect(px, px)
          .fill("#000000")
          .x(j * px)
          .y(i * px);
      } else if (Level.room[i][j] === 2) {
        draw
          .polygon("0,0 0,20 10,10")
          .x(j * px)
          .y(i * px);
      } else if (Level.room[i][j] === 3) {
        draw
          .polygon("20,0 20,20 10,10")
          .x(j * px + 10)
          .y(i * px);
      } else if (Level.room[i][j] === 4) {
        draw
          .polygon("0,0 20,0 10,20")
          .x(j * px)
          .y(i * px);
      } else if (Level.room[i][j] === 5) {
        draw
          .polygon("20,20 20,0 10,0")
          .x(j * px)
          .y(i * px);
      } else if (Level.room[i][j] === 8) {
        draw
          .rect(16, 5)
          .x(j * px + 2)
          .y(i * px);
      }
    }
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

function printBullet(bullet, i, j) {
  if (bullet.dx == 0 && bullet.dy > 0) {
    draw
      .rect(6, 16)
      .x(j * px)
      .y(i * px + 7);
  } else if (bullet.dx == 0 && bullet.dy < 0) {
    draw
      .rect(6, 16)
      .x(j * px)
      .y(i * px + 7);
  } else if (Math.abs(bullet.dx) > Math.abs(bullet.dy)) {
    draw
      .rect(16, 5)
      .x(j * px + 2)
      .y(i * px);
  } else if (Math.abs(bullet.dx) < Math.abs(bullet.dy)) {
    draw
      .rect(16, 5)
      .x(j * px + 2)
      .y(i * px);
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
  await sleep(50);
  window.requestAnimationFrame(() => GameLoop(levelIndex));
}

window.requestAnimationFrame(() => GameLoop(0));
