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

//thing is, these already are objects
//but I don't think they are the one's that I need in order to manipulate how I like
//maybe add an existence variable to set to one or zero
//but I think I need to make them 'elements', global variables
//not anonymously drawn variables
//issue is, this is going to be dependent on x,y,z conditions and not directly stated like how it is in this pong
//at least this is what I posit
//can I not access it specificaly as bulletsRoom1[0]
//is that not its name?
//if I already have an object with attributes, declared, how can i associate it with a draw.rect...?
//is this just data? do i have to create another variable to which I associate this data
//these aren't dom elements
/*
var rect   = draw.rect(20, 30)
var circle = draw.circle(50)

draw.get(0) //-> returns rect
draw.get(1) //-> returns circle
VERY INTERESTING

can you just create a global variable in the middle of a program, yes
can you do it without directly naming it? no
bulletsRoom1[0].draw.rect... I want to do this
perhaps when I initialize a bullet object, in its constructor it will perform the draw
yes that sounds very smart
start with the bullet array empty, as you draw the array, 
initialize a bullet based on the turret specifics
store each new object as an element in the bulletArray and accessible as such
bulletsRoom1.push(draw.rect...);
I don't think that should mess things up
*/
var bulletsRoom1 = [];

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
  { x: 2, y: 3, dx: 0.5, dy: 0, t: 0 }, //0
  { x: 2, y: 8, dx: 0.5, dy: 0, t: 0 }, //1
  { x: 2, y: 12, dx: 0.5, dy: 0, t: 0 }, //2
  { x: 17, y: 5, dx: -0.5, dy: 0, t: 0 }, //3
  { x: 17, y: 10, dx: -0.5, dy: 0, t: 0 }, //4
  { x: 17, y: 14, dx: -0.5, dy: 0, t: 0 }, //5
  { x: 8, y: 2, dx: 0, dy: 0.5, t: 0 }, //6
  { x: 15, y: 2, dx: 0, dy: 0.5, t: 0 }, //7
  { x: 4, y: 17, dx: 0, dy: -0.5, t: 0 }, //8
  { x: 11, y: 17, dx: 0, dy: -0.5, t: 0 }, //9
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

async function BuildArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[0].length; j++) {
      if (Level.room[i][j] == 0) {
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
        Level.bullets.push(
          draw
            .polygon("0,0 15,0 18,3 15,6 0,6 3,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ dx: 1, dy: 0, t: 0 })
        );
      } else if (Level.room[i][j] === 3) {
        draw
          .polygon("20,0 20,20 10,10")
          .x(j * px + 10)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("5,0 20,0 17,3 20,6 5,6 2,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ dx: -1, dy: 0, t: 0 })
        );
      } else if (Level.room[i][j] === 4) {
        draw
          .polygon("0,0 20,0 10,20")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .rect(6, 18)
            .x(j * px)
            .y(i * px + 7)
            .attr({ dx: 0, dy: 1, t: 0 })
        );
      } else if (Level.room[i][j] === 5) {
        draw
          .polygon("20,20 20,0 10,0")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .rect(6, 18)
            .x(j * px)
            .y(i * px + 7)
            .attr({ dx: 0, dy: -1, t: 0 })
        );
      } else if (Level.room[i][j] === 8) {
        draw
          .rect(16, 5)
          .x(j * px + 2)
          .y(i * px);
      }
    }
  }
  return true;
}

async function MoveMutables(Level, player) {
  for (let i = 0; i < Level.room.length; i++) {
    loop2: for (let j = 0; j < Level.room[0].length; j++) {
      if (Level.room[i][j] === 0) {
      }
      if (i == player.x && j == player.y) {
        draw
          .rect(px / 2, px / 2)
          .x(j * px + 3)
          .y(i * px + 3);
      }
    }
  }
}

async function MovePlayer(Level, player, key) {
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

//this needs a complete overhaul
//the question is now how will I give each bullet its own velocity?
//this is no longer directly accessible in a predeclared array
//It is only an object so maybe I can give this object an attribute with simple a key-value declaration
//then, I need more information when I create a bullet, not just its creation
//I think I can delete this function
function MoveBullets(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    Level.bullets[i]
      .dx(Level.bullets[i].attr("dx") * px)
      .dy(Level.bullets[i].attr("dy") * px);
  }
}

/*
function HitDetection(Level, player) {
  for (let i = 0; i < Level.bullets.length; i++) {
    if (player.y == Level.bullets[i].x && player.x == Level.bullets[i].y) {
      alert("hit");
      player.x = 1;
      player.y = 1;
    }
  }
}
*/

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
let roomFlag = false;

async function GameLoop(levelIndex, roomFlag) {
  let Level = allLevels[levelIndex];
  if (roomFlag == false) {
    roomFlag = BuildArray(Level);
  }
  MoveMutables(Level, player);
  document.addEventListener("keydown", (event) => {
    if (interval === 1) {
      MovePlayer(Level, player, event.key);
      interval = 0;
    }
  });
  interval = 1;
  //HitDetection(Level, player);
  MoveBullets(Level);
  let moveToNextLevel = WinCondition(Level, player);
  if (moveToNextLevel) {
    levelIndex++;
    roomFlag = false;
  }
  await sleep(300);
  window.requestAnimationFrame(() => GameLoop(levelIndex, roomFlag));
}

window.requestAnimationFrame(() => GameLoop(0, roomFlag));
