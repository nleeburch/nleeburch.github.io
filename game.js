var draw = SVG("game").size(500, 500);
var px = 20;
////////////////////////////////////////////

////////////////////////////////////////////
class Level {
  constructor(room, bullets, player) {
    this.room = room;
    this.bullets = bullets;
    this.player = {};
  }
  //I think it has something to do with the constructor
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
let bulletsRoom1 = [];
let arrayRoom1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 2.1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3.1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 2.01, 0, 0, 0, 1, 1, 1, 1, 1, 1],
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

var bulletsRoom2 = [];
let arrayRoom2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 4.35, 0, 0, 4.4, 0, 0, 0, 0, 0, 0, 4.3, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.55, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.44, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.33, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 5.35, 0, 0, 0, 0, 0, 0, 5.4, 0, 0, 0, 1, 0, 0, 0, 1],
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

function BuildArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[0].length; j++) {
      if (Level.room[i][j] == "p") {
        Level.player = draw
          .rect(px / 2, px / 2)
          .fill("#0a0aff")
          .x(j * px + 3)
          .y(i * px + 3)
          .attr({ dx: 0.5, dy: 0.5, id: i });
        Level.room[i][j] = 0;
      } else if (Level.room[i][j] == 1) {
        draw
          .rect(px, px)
          .x(j * px)
          .y(i * px);
      } else if (Math.floor(Level.room[i][j]) === 2) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("0,0 0,20 10,10")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("0,0 15,0 18,3 15,6 0,6 3,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ t: 0, dx: v, dy: 0 })
        );
      } else if (Math.floor(Level.room[i][j]) === 3) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("20,0 20,20 10,10")
          .x(j * px + 10)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("5,0 20,0 17,3 20,6 5,6 2,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ t: 0, dx: -v, dy: 0 })
        );
      } else if (Math.floor(Level.room[i][j]) === 4) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("0,0 20,0 10,20")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("0,0 3,3 6,0 6,17 3,20 0,17")
            .x(j * px + 7)
            .y(i * px)
            .attr({ t: 0, dx: 0, dy: v })
        );
      } else if (Math.floor(Level.room[i][j]) === 5) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("10,0 20,20 0,20")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("3,0 6,3 6,20 3,17 0,20 0,3")
            .x(j * px + 7)
            .y(i * px)
            .attr({ t: 0, dx: 0, dy: -v })
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

function MovePlayer(Level, key) {
  //w
  if (key == "w") {
    Level.player.attr({ dx: 0, dy: -0.5 });
  }
  //a
  else if (key == "a") {
    Level.player.attr({ dx: -0.5, dy: 0 });
  }
  //s
  else if (key == "s") {
    Level.player.attr({ dx: 0, dy: 0.5 });
  }
  //d
  else if (key == "d") {
    Level.player.attr({ dx: 0.5, dy: 0 });
  }
  if (
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] < 1 ||
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] > 7
  ) {
    //it is reaching here
    //what's the fuckin problem
    //the data is changing but the representation on screen is not for some stupid reason I dont know why
    //for some stupid reason it is still manipulating the first Level's player
    //why would that ever happen
    //alert(Level.player.attr("id"));
    Level.player.dmove(
      Level.player.attr("dx") * px,
      Level.player.attr("dy") * px
    );
  }
}

function MoveBullets(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    Level.bullets[i]
      .dx(Level.bullets[i].attr("dx") * px)
      .dy(Level.bullets[i].attr("dy") * px)
      .attr("t", Level.bullets[i].attr("t") + 1);
    if (
      Level.room[Math.round(Level.bullets[i].y() / px)][
        Math.round(Level.bullets[i].x() / px)
      ] == 1
    ) {
      Level.bullets[i]
        .dx(-(Level.bullets[i].attr("dx") * px) * Level.bullets[i].attr("t"))
        .dy(-(Level.bullets[i].attr("dy") * px) * Level.bullets[i].attr("t"))
        .attr("t", 0);
    }
  }
}

function HitDetection(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    if (
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5)
    ) {
      Level.player.x(26);
      Level.player.y(26);
    }
  }
}

function WinCondition(Level) {
  if (
    Level.room[
      Math.floor((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.floor((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
  ) {
    alert("you wan");
    Level.player = {};
    return true;
  }
  return false;
}

function EraseArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[0].length; j++) {
      draw
        .rect(px, px)
        .fill("#ffffff")
        .x(j * px)
        .y(i * px);
    }
  }
}

///////////////////////////////////////////////

let interval = 1;
let roomFlag = false;

async function GameLoop(levelIndex, roomFlag) {
  let Level = allLevels[levelIndex];
  let moveToNextLevel = false;
  if (roomFlag == false) {
    roomFlag = BuildArray(Level);
  }
  window.document.addEventListener("keydown", (event) => {
    if (interval === 1) {
      MovePlayer(Level, event.key);
      interval = 0;
    }
  });
  interval = 1;
  HitDetection(Level);
  MoveBullets(Level);
  moveToNextLevel = WinCondition(Level);
  if (moveToNextLevel) {
    roomFlag = false;
    EraseArray(Level);
    levelIndex++;
  }
  await sleep(33);
  window.requestAnimationFrame(() => GameLoop(levelIndex, roomFlag));
}

window.requestAnimationFrame(() => GameLoop(0, roomFlag));
