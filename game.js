//draws the box in which SVG elements reside
var draw = SVG("game").size(500, 500);
//standard unit of measurement
var px = 20;
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
//bullet array is filled according ot the room array
let bulletsRoom1 = [];
let arrayRoom1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 2.15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3.15, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 2.1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//8 = goal
//9 = player

/////////////////////////////////////////////
let bulletsRoom2 = [];
let arrayRoom2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 4.2, 0, 0, 4.4, 0, 0, 0, 0, 0, 0, 4.3, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.5, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.4, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.3, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 5.3, 0, 0, 0, 0, 0, 0, 5.4, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
];
//1 = wall
//2 = eastward turret 
//3 = westward turret 
//4 = southward turret 
//5 = northward turret 
//8 = goal
//9 = player
/////////////////////////////////////////////
let bulletsRoom3 = [];
let arrayRoom3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 4.022, 0, 0, 0, 0, 4.033, 0, 0, 0, 0, 4.044, 0, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.022, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.033, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.044, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.044, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.033, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.055, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 5.044, 0, 0, 0, 0, 5.033, 0, 0, 0, 0, 5.022, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret 
//3 = westward turret 
//4 = southward turret 
//5 = northward turret 
//8 = goal
//9 = player
//"s" = snake head
///////////////////////////////////////////////////
let Level1 = new Level(arrayRoom1, bulletsRoom1, 1);
let Level2 = new Level(arrayRoom2, bulletsRoom2, 2);
let Level3 = new Level(arrayRoom3, bulletsRoom3, 3);
let allLevels = [Level1, Level2, Level3];
///////////////////////////////////////////////////
function BuildArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    //scan through array
    for (let j = 0; j < Level.room[i].length; j++) {
      if (Level.room[i][j] == "p") {
        //initialize the player object as an SVG element
        Level.player = draw
          .rect(px / 2, px / 2)
          .fill("#0a0aff")
          .x(j * px + 3)
          .y(i * px + 3)
          //with all these attributes
          .attr({
            dx: 0,
            dy: 0,
            startX: j * px + 3,
            startY: i * px + 3,
          });
          //max four bullets at a time
        Level.player.ammo = [null, null, null, null];
        //necessary data to navigate around a stupid bug when changing levels
        Level.player.id = Level.id;
        //then set the room position to 0;
        Level.room[i][j] = 0;
      } else if (Level.room[i][j] == 1) {
        //draws the wall
        draw
          .rect(px, px)
          .x(j * px)
          .y(i * px);
      } else if (Math.floor(Level.room[i][j]) === 2) {
        //draws the eastward turret
        //v is the velocity of the bullet determined by 2.xx in the room array above
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("0,0 0,20 10,10")
          .x(j * px)
          .y(i * px);
          //pushes the bullet onto the Level's bullet array
          //initializes the bullet as an SVG element
        Level.bullets.push(
          draw
            .polygon("0,0 15,0 18,3 15,6 0,6 3,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ t: 0, dx: v, dy: 0 })
        );
      } 
      //this turret/bullet process is the same for all turrets (3,4,5)
      else if (Math.floor(Level.room[i][j]) === 3) {
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
          //builds a snake of length 10 by pushing objects onto an empty array where the first one is the "head"
          Level.snake.push(
            draw
              .rect(px - 2, px - 2)
              .fill("#292")
              .x(j * px)
              .y(i * px + k * px)
              .attr({ dx: 0, dy: 0, hp: 5, is: "alive" })
          );
        }
      }
    }
  }
  //sets roomFlag to true so that this function needs only run a single time
  return true;
}

//I would like to smoothen this so it doesn't linger before full speed
function ControlPlayer(Level, key) {
  //only affects the player object which matches its id with that of the level
  //something happens where the gameloop continues to affect the previous level's player object
  //this bypasses that stupidity 
  if (Level.player.id == Level.id) {
    if (key == "w") {
      //sets dx, dy based on the key
      Level.player.attr({ dx: 0, dy: -0.5 });
      //calls a function which handles the players movement
      MovePlayer(Level);
    }
    else if (key == "a") {
      Level.player.attr({ dx: -0.5, dy: 0 });
      MovePlayer(Level);
    }
    else if (key == "s") {
      Level.player.attr({ dx: 0, dy: 0.5 });
      MovePlayer(Level);
    }
    else if (key == "d") {
      Level.player.attr({ dx: 0.5, dy: 0 });
      MovePlayer(Level);
    } 
    //for shooting
    else if (key == "ArrowUp") {
      //only available on level 3
      if (Level.id == 3) {
        for (let i = 0; i < Level.player.ammo.length; i++) {
          //only 4 bullets allowed at a time
          if (Level.player.ammo[i] == null) {
            //initializes the bullet in the null element in the player.ammo array
            Level.player.ammo[i] = draw
              .polygon("3,0 6,3 6,20 3,17 0,20 0,3")
              .fill("#f00")
              .x(Level.player.x())
              .y(Level.player.y())
              .attr({ dx: 0, dy: -0.1 });
              //return forces only a single shot
              //fixes multiple multidirectional bullet bug
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
              .attr({ dx: 0, dy: 0.1 });
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
              .attr({ dx: -0.1, dy: 0 });
            return;
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
              .attr({ dx: 0.1, dy: 0 });
            return;
          }
        }
      }
    }
  }
}

function MovePlayer(Level) {
  //if the next position in the array is not a wall or a turret
  if (
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] < 1 ||
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] > 7
  ) {
    //then you may proceed
    Level.player.dmove(
      Level.player.attr("dx") * px,
      Level.player.attr("dy") * px
    );
  }
  //side note: could literally calculate the dimension of the room and bar the player from moving beyond
}

function MoveBullets(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    //go right ahead and move the bullet
    Level.bullets[i]
      .dx(Level.bullets[i].attr("dx") * px)
      .dy(Level.bullets[i].attr("dy") * px)
      .attr("t", Level.bullets[i].attr("t") + 1);

    //if it hits a wall
    if (
      Level.room[Math.round(Level.bullets[i].y() / px)][
        Math.round(Level.bullets[i].x() / px)
      ] == 1
    ) {
      //do some math to return the bullet to its starting position
      Level.bullets[i]
        .dx(-(Level.bullets[i].attr("dx") * px) * Level.bullets[i].attr("t"))
        .dy(-(Level.bullets[i].attr("dy") * px) * Level.bullets[i].attr("t"))
        .attr("t", 0);
    }
  }

  //if on level 3 then also move the player's bullets
  if (Level.id == 3) {
    for (let j = 0; j < Level.player.ammo.length; j++) {
      if (Level.player.ammo[j] != null) {
        Level.player.ammo[j]
          .dx(Level.player.ammo[j].attr("dx") * px)
          .dy(Level.player.ammo[j].attr("dy") * px);
        //if the bullet hits a wall
          if (
          Level.room[Math.round(Level.player.ammo[j].y() / px)][
            Math.round(Level.player.ammo[j].x() / px)
          ] == 1
        ) {
          //remove the element from the display
          Level.player.ammo[j].remove();
          //set the element to null
          Level.player.ammo[j] = null;
          //break for some reason
          break;
        }
      }
    }
  }
}

/*
possible scenarios for player bullet interaction
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
    //all these conditionals account for the above
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
      //if collision is successful
      alert("you died");
      //return player to the start
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
    }
  }

  //checks player-bullet/snake collision
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
          //handles the collision
          HandleSnake(Level, i);
          break;
        }
      }
    }
  }
}

function HandleSnake(Level, i) {
  //change color of snake segment based on hp value
  Level.snake[i].attr("hp", Level.snake[i].attr("hp") - 1);
  if (Level.snake[i].attr("hp") == 4) {
    Level.snake[i].fill("#282");
  } else if (Level.snake[i].attr("hp") == 3) {
    Level.snake[i].fill("#272");
  } else if (Level.snake[i].attr("hp") == 2) {
    Level.snake[i].fill("#262");
  } else if (Level.snake[i].attr("hp") == 1) {
    Level.snake[i].fill("#252");
  } else if (Level.snake[i].attr("hp") == 0) {
    Level.snake[i].fill("#000");
  }

  //for loop to check if snake is fully dead
  let snakeHpCounter = 0;
  for (let j = 0; j < Level.snake.length; j++) {
    if (Level.snake[j].attr("hp") <= 0) {
      snakeHpCounter++;
    }
  }
  //handles death
  if (snakeHpCounter == Level.snake.length) {
    Level.snake[0].attr({ is: "dead" });
    alert("dead snake");
  }
}

//determines the snakes direction based on slopes and shortest path possible
function MoveSnake(Level, snakeMoveCounter) {
  //some math
  let dx = Level.snake[0].x() - Level.player.x();
  let dy = Level.snake[0].y() - Level.player.y();
  //shortest path from snake head to player determines direction
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
  //movement code
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
player-snake hit detection
adds to the collection of hitbox checks from bullet collision
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

//particular win conditions for each level
function WinCondition(Level) {
  if (Level.id == 1) {
    if (
      Level.room[
        Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
      ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
    ) {
      alert("you wan");
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
      return true;
    }
  } else if (Level.id == 2) {
    if (
      Level.room[
        Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
      ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
    ) {
      alert("you wan");
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
      return true;
    }
  } else if (Level.id == 3) {
    if (Level.snake[0].attr("is") == "dead") {
      Level.player.x(Level.player.attr("startX"));
      Level.player.y(Level.player.attr("startY"));
      return true;
    }
  }
  return false;
}

//used after level completion
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
//interval fixes the nuisance bug which causes the EventListener to be called many many times
let interval = 1;
let roomFlag = false;
let snakeCounter = 0;
let snakeDirectionCounter = 0;

async function GameLoop(levelIndex, roomFlag) {
  let CurrentLevel = allLevels[levelIndex];
  //only calls BuildArray once
  if (roomFlag == false) {
    roomFlag = BuildArray(CurrentLevel);
  }

  document.addEventListener(
    "keydown",
    function onKeyDown(event) {
      //ControlPlayer only calls once
      if (interval === 1) {
        ControlPlayer(CurrentLevel, event.key);
        interval = 0;
      }
      //removeEventListner fixes a bunch of nonsense as well
      document.removeEventListener("keydown", onKeyDown, false);
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
    if (snakeCounter >= 30) {
      MoveSnake(CurrentLevel, snakeDirectionCounter);
      snakeCounter = 0;
      if (snakeDirectionCounter == 4) {
        snakeDirectionCounter = -1;
      }
      snakeDirectionCounter++;
    }
  }

  if (moveToNextLevel) {
    roomFlag = false;
    EraseArray(CurrentLevel);
    levelIndex++;
    if (levelIndex == 3) {
      levelIndex = 0;
    }
  }

  window.requestAnimationFrame(() => GameLoop(levelIndex, roomFlag));
}

window.requestAnimationFrame(() => GameLoop(0, roomFlag));

/*
something wrong with hitboxes on third level
next level works like a treadmill where dependent on the position of the player and his direction
the map moves along with him
add jumping
make mario pretty much
and physics

I think I'll need to start a new project
pokemon project
*/
