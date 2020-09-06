var draw = SVG("game").size(500, 500);
var px = 20;
////////////////////////////////////////////

////////////////////////////////////////////
class Level {
  constructor(room, bullets, id) {
    this.room = room;
    this.bullets = bullets;
    this.player = {};
    this.snake = [];
    this.id = id;
  }
}
////////////////////////////////////////////
let bulletsRoom1 = [];
let arrayRoom1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
  [1, 0, 0, 0, 0, 0, 0, "p", 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//9 = player

/////////////////////////////////////////////
let bulletsRoom2 = [];
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
/////////////////////////////////////////////
let bulletsRoom3 = [];
let arrayRoom3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 4.14, 0, 0, 0, 0, 4.13, 0, 0, 0, 0, 4.17, 0, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.14, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.13, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.12, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.16, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 5.14, 0, 0, 0, 0, 5.15, 0, 0, 0, 0, 5.17, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret  (0,1,2)
//3 = westward turret  (3,4,5)
//4 = southward turret (6,7)
//5 = northward turret (8,9)
//9 = player
///////////////////////////////////////////////////
let Level1 = new Level(arrayRoom1, bulletsRoom1, 1);
let Level2 = new Level(arrayRoom2, bulletsRoom2, 2);
let Level3 = new Level(arrayRoom3, bulletsRoom3, 3);
///////////////////////////////////////////////////
let allLevels = [Level1, Level2, Level3];
///////////////////////////////////////////////////
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
          .attr({
            dx: 0,
            dy: 0,
            startX: j * px + 3,
            startY: i * px + 3,
          });
        Level.player.ammo = [null, null, null, null];
        Level.player.id = Level.id;
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
      } else if (Level.room[i][j] === "s") {
        for (let k = 0; k < 10; k++) {
          Level.snake.push(
            draw
              .rect(px - 2, px - 2)
              .fill("#272")
              .x(j * px)
              .y(i * px + k * px)
              .attr({ dx: 0, dy: 0, hp: 5, is: "alive" })
          );
        }
      }
    }
  }
  return true;
}

//I would like to smoothen this so it doesn't linger before full speed
//create a gate such that it only manipulates the current level's player if id's match
function ControlPlayer(Level, key) {
  if (Level.id == Level.player.id) {
    //w
    if (key == "w") {
      Level.player.attr({ dx: 0, dy: -0.5 });
      MovePlayer(Level);
    }
    //a
    else if (key == "a") {
      Level.player.attr({ dx: -0.5, dy: 0 });
      MovePlayer(Level);
    }
    //s
    else if (key == "s") {
      Level.player.attr({ dx: 0, dy: 0.5 });
      MovePlayer(Level);
    }
    //d
    else if (key == "d") {
      Level.player.attr({ dx: 0.5, dy: 0 });
      MovePlayer(Level);
    } else if (key == "ArrowUp") {
      if (Level.id == 3) {
        for (let i = 0; i < Level.player.ammo.length; i++) {
          if (Level.player.ammo[i] == null) {
            Level.player.ammo[i] = draw
              .polygon("3,0 6,3 6,20 3,17 0,20 0,3")
              .fill("#f00")
              .x(Level.player.x())
              .y(Level.player.y())
              .attr({ dx: 0, dy: -0.5 });
            return;
          }
        }
      }
    } else if (key == "ArrowDown") {
      if (Level.id == 3) {
        for (let i = 0; i < Level.player.ammo.length; i++) {
          if (Level.player.ammo[i] == null) {
            Level.player.ammo[i] = draw
              .polygon("0,0 3,3 6,0 6,17 3,20 0,17")
              .fill("#f00")
              .x(Level.player.x())
              .y(Level.player.y())
              .attr({ dx: 0, dy: 0.5 });
            return;
          }
        }
      }
    } else if (key == "ArrowLeft") {
      if (Level.id == 3) {
        for (let i = 0; i < Level.player.ammo.length; i++) {
          if (Level.player.ammo[i] == null) {
            Level.player.ammo[i] = draw
              .polygon("5,0 20,0 17,3 20,6 5,6 2,3")
              .fill("#f00")
              .x(Level.player.x())
              .y(Level.player.y())
              .attr({ dx: -0.5, dy: 0 });
            return;
            //weird fix but ok
          }
        }
      }
    } else if (key == "ArrowRight") {
      if (Level.id == 3) {
        for (let i = 0; i < Level.player.ammo.length; i++) {
          if (Level.player.ammo[i] == null) {
            Level.player.ammo[i] = draw
              .polygon("0,0 15,0 18,3 15,6 0,6 3,3")
              .fill("#f00")
              .x(Level.player.x())
              .y(Level.player.y())
              .attr({ dx: 0.5, dy: 0 });
            return;
          }
        }
      }
    }
  }
}

function MovePlayer(Level) {
  if (
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] < 1 ||
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] > 7
  ) {
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

  if (Level.id == 3) {
    for (let j = 0; j < Level.player.ammo.length; j++) {
      if (Level.player.ammo[j] != null) {
        Level.player.ammo[j]
          .dx(Level.player.ammo[j].attr("dx") * px)
          .dy(Level.player.ammo[j].attr("dy") * px);
        if (
          Level.room[Math.round(Level.player.ammo[j].y() / px)][
            Math.round(Level.player.ammo[j].x() / px)
          ] == 1
        ) {
          Level.player.ammo[j].remove();
          Level.player.ammo[j] = null;
          break;
        }
      }
    }
  }
}

/*
 , = player
 . = bullet
-------------------
    .   .  p.x >= b.x , p.x + 9 <= b.x + 17
    ., ,.  p.y <= b.y + 5 , p.y + 9 >= b.y + 5       
     , ,
-------------------
     , ,   p.x >= b.x , p.x + 9 <= b.x + 17
    ., ,.  p.y <= b.y , p.y + 9 >= b.y
    .   .
-------------------
    .   .  p.x <= b.x + 17 , p.x + 9 >= b.x + 17
    .  ,., p.y <= b.y + 5 , p.y + 9 >= b.y + 5
       , ,
-------------------    
       , , p.x <= b.x + 17 , p.x + 9 >= b.x + 17
    .  ,., p.y <= b.y , p.y + 9 >= b.y
    .   .
-------------------
   , ,     p.x <= b.x , p.x + 9 >= b.x
   ,.,  .  p.y <= b.y , p.y + 9 >= b.y
    .   .
-------------------
    .   .  p.x <= b.x , p.x + 9 >= b.x
   ,.,  .  p.y <= b.y + 5 , p.y + 9 >= b.y + 5
   , ,
-------------------
*/
function BulletHitDetection(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    if (
      (Level.player.x() >= Level.bullets[i].x() &&
        Level.player.x() + 9 <= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5) ||
      (Level.player.x() >= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 <= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5)
    ) {
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
    }
  }

  for (let i = 0; i < Level.snake.length; i++) {
    for (let j = 0; j < Level.player.ammo.length; j++) {
      if (Level.player.ammo[j] != null) {
        if (
          (Level.player.ammo[j].x() >= Level.snake[i].x() &&
            Level.player.ammo[j].x() <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() >= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 <= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() >= Level.snake[i].x() &&
            Level.player.ammo[j].x() <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() + 19 &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() <= Level.snake[i].x() &&
            Level.player.ammo[j].x() + 17 >= Level.snake[i].x() &&
            Level.player.ammo[j].y() >= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 <= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() >= Level.snake[i].x() &&
            Level.player.ammo[j].x() + 17 <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() + 19 &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() >= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].x() + 17 <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y()) ||
          (Level.player.ammo[j].x() <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].x() + 17 >= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() + 19 &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() <= Level.snake[i].x() + 17 &&
            Level.player.ammo[j].x() + 17 >= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y()) ||
          (Level.player.ammo[j].x() <= Level.snake[i].x() &&
            Level.player.ammo[j].x() + 9 >= Level.snake[i].x() &&
            Level.player.ammo[j].y() <= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y()) ||
          (Level.player.ammo[j].x() <= Level.snake[i].x() &&
            Level.player.ammo[j].x() + 17 >= Level.snake[i].x() &&
            Level.player.ammo[j].y() <= Level.snake[i].y() + 19 &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y() + 19) ||
          (Level.player.ammo[j].x() >= Level.snake[i].x() &&
            Level.player.ammo[j].x() <= Level.snake[i].x() + 19 &&
            Level.player.ammo[j].y() <= Level.snake[i].y() &&
            Level.player.ammo[j].y() + 5 >= Level.snake[i].y())
        ) {
          Level.player.ammo[j].remove();
          Level.player.ammo[j] = null;
          HandleSnake(Level, i);
          break;
        }
      }
    }
  }
}

function HandleSnake(Level, i) {
  Level.snake[i].attr("hp", Level.snake[i].attr("hp") - 1);
  if (Level.snake[i].attr("hp") == 4) {
    Level.snake[i].fill("#262");
  } else if (Level.snake[i].attr("hp") == 3) {
    Level.snake[i].fill("#252");
  } else if (Level.snake[i].attr("hp") == 2) {
    Level.snake[i].fill("#242");
  } else if (Level.snake[i].attr("hp") == 1) {
    Level.snake[i].fill("#232");
  } else if (Level.snake[i].attr("hp") == 0) {
    Level.snake[i].fill("#222");
  }

  let snakeHpCounter = 0;
  for (let j = 0; j < Level.snake.length; j++) {
    if (Level.snake[j].attr("hp") <= 0) {
      snakeHpCounter++;
    }
  }

  if (snakeHpCounter == Level.snake.length) {
    Level.snake[0].attr({ is: "dead" });
    alert("dead");
  }
}

function MoveSnake(Level, snakeMoveCounter) {
  let dx = Level.snake[0].x() - Level.player.x();
  let dy = Level.snake[0].y() - Level.player.y();
  if (snakeMoveCounter == 0) {
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        Level.snake[0].attr({ dx: -1, dy: 0 });
      } else if (dx < 0) {
        Level.snake[0].attr({ dx: 1, dy: 0 });
      }
    } else if (Math.abs(dx) < Math.abs(dy)) {
      if (dy > 0) {
        Level.snake[0].attr({ dx: 0, dy: -1 });
      } else if (dy < 0) {
        Level.snake[0].attr({ dx: 0, dy: 1 });
      }
    }
  }
  if (
    Level.room[
      Math.floor((Level.snake[0].y() + Level.snake[0].attr("dy") * px) / px)
    ][Math.floor((Level.snake[0].x() + Level.snake[0].attr("dx") * px) / px)] ==
    0
  ) {
    for (let i = Level.snake.length - 1; i >= 1; i--) {
      Level.snake[i].x(Level.snake[i - 1].x());
      Level.snake[i].y(Level.snake[i - 1].y());
    }
    Level.snake[0].dx(Level.snake[0].attr("dx") * px);
    Level.snake[0].dy(Level.snake[0].attr("dy") * px);
  }
}

/*
-------------------
     , ,   p.x >= s.x , p.x <= s.x + 19
    ., ,.  p.y <= s.y , p.y + 9 >= s.y
    .   .
-------------------
    .   .  p.x >= s.x , p.x <= s.x + 19
    ., ,.  p.y <= s.y + 5 , p.y + 9 >= s.y + 19
     , ,
-------------------
   ,.,  .  p.x <= s.x , p.x + 9 >= s.x
   ,.,  .  p.y >= s.y , p.y + 9 <= s.y + 19
-------------------
    .  ,.,  p.x <= s.x + 17 , p.x + 9 >= s.x + 19
    .  ,.,  p.y >= s.y , p.y + 9 <= s.y + 19
-------------------
    ., ,.   p.x >= s.x , p.x <= s.x + 19
    ., ,.   p.y >= s.y , p.y + 9 <= s.y + 19
-------------------
*/
function SnakeHitDetection(Level) {
  for (let i = 0; i < Level.snake.length; i++) {
    if (
      (Level.player.x() >= Level.snake[i].x() &&
        Level.player.x() <= Level.snake[i].x() + 19 &&
        Level.player.y() >= Level.snake[i].y() &&
        Level.player.y() + 9 <= Level.snake[i].y() + 19) ||
      (Level.player.x() >= Level.snake[i].x() &&
        Level.player.x() <= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() + 19 &&
        Level.player.y() + 9 >= Level.snake[i].y() + 19) ||
      (Level.player.x() <= Level.snake[i].x() &&
        Level.player.x() + 9 >= Level.snake[i].x() &&
        Level.player.y() >= Level.snake[i].y() &&
        Level.player.y() + 9 <= Level.snake[i].y() + 19) ||
      (Level.player.x() >= Level.snake[i].x() &&
        Level.player.x() + 9 <= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() + 19 &&
        Level.player.y() + 9 >= Level.snake[i].y() + 19) ||
      (Level.player.x() >= Level.snake[i].x() + 19 &&
        Level.player.x() + 9 <= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() &&
        Level.player.y() + 9 >= Level.snake[i].y()) ||
      (Level.player.x() <= Level.snake[i].x() + 19 &&
        Level.player.x() + 9 >= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() + 19 &&
        Level.player.y() + 9 >= Level.snake[i].y() + 19) ||
      (Level.player.x() <= Level.snake[i].x() + 17 &&
        Level.player.x() + 9 >= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() &&
        Level.player.y() + 9 >= Level.snake[i].y()) ||
      (Level.player.x() <= Level.snake[i].x() &&
        Level.player.x() + 9 >= Level.snake[i].x() &&
        Level.player.y() <= Level.snake[i].y() &&
        Level.player.y() + 9 >= Level.snake[i].y()) ||
      (Level.player.x() <= Level.snake[i].x() &&
        Level.player.x() + 9 >= Level.snake[i].x() &&
        Level.player.y() <= Level.snake[i].y() + 19 &&
        Level.player.y() + 9 >= Level.snake[i].y() + 19) ||
      (Level.player.x() >= Level.snake[i].x() &&
        Level.player.x() <= Level.snake[i].x() + 19 &&
        Level.player.y() <= Level.snake[i].y() &&
        Level.player.y() + 9 >= Level.snake[i].y())
    ) {
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
    }
  }
}

function WinCondition(Level) {
  if (Level.id == 1) {
    if (
      Level.room[
        Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
      ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
    ) {
      alert("you wan");
      Level.player = {};
      return true;
    }
  } else if (Level.id == 2) {
    if (
      Level.room[
        Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
      ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
    ) {
      alert("you wan");
      Level.player = {};
      return true;
    }
  } else if (Level.id == 3) {
    if (Level.snake[0].attr("is") == "dead") {
      Level.player = {};
      return true;
    }
  }
  return false;
}

function EraseArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[i].length; j++) {
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
let snakeCounter = 0;
let snakeMoveCounter = 0;

async function GameLoop(levelIndex, roomFlag) {
  let CurrentLevel = allLevels[levelIndex];
  if (roomFlag == false) {
    roomFlag = BuildArray(CurrentLevel);
  }

  document.addEventListener(
    "keydown",
    function onKeyDown(event) {
      if (interval === 1) {
        ControlPlayer(CurrentLevel, event.key);
        interval = 0;
      }
      document.removeEventListener("keydown", onKeyDown, false);
      //I have no clue why addign this worked but it did
    },
    false
  );
  interval = 1;
  BulletHitDetection(CurrentLevel);
  MoveBullets(CurrentLevel);
  let moveToNextLevel = WinCondition(CurrentLevel);

  if (levelIndex == 2) {
    MoveBullets(CurrentLevel);
    SnakeHitDetection(CurrentLevel);
    snakeCounter++;
    if (snakeCounter >= 20) {
      //MoveSnake(CurrentLevel, snakeMoveCounter);
      snakeCounter = 0;
      if (snakeMoveCounter == 4) {
        snakeMoveCounter = -1;
      }
      snakeMoveCounter++;
    }
  }

  if (moveToNextLevel) {
    roomFlag = false;
    EraseArray(CurrentLevel);
    levelIndex++;
  }

  await sleep(30);
  window.requestAnimationFrame(() => GameLoop(levelIndex, roomFlag));
}

window.requestAnimationFrame(() => GameLoop(0, roomFlag));

/*
fix the level to level bug
there is just something that fucks up moving from level to level
its as if levelindex doesn't include the new player
for what reason would it continue manipulating the previous level's player object when I am on the next level
do I have to differentiate them by sayin
fix the wincondition bug
getting hit means you restart completely
*/
