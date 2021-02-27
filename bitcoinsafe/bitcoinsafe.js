var choice1 = "";
var choice2 = "";
var entries = [];
let tempRow = {};
let tempCell = {};
let tempComment = {};

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}

function handleRestart() {
  window.location.reload(true);
}

function handleButton(string) {
  switch (string) {
    case "privacy": {
      choice1 = string;
      document.getElementById("privacy").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("privacy").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("setupspeed").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("setupspeed").style.backgroundColor =
        "rgb(0, 123, 255)";
      break;
    }
    case "setupspeed": {
      choice1 = string;
      document.getElementById("setupspeed").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("setupspeed").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("privacy").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("privacy").style.backgroundColor =
        "rgb(0, 123, 255)";
      break;
    }
    case "security": {
      choice2 = string;
      document.getElementById("security").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("security").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("spendingspeed").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("spendingspeed").style.backgroundColor =
        "rgb(0, 123, 255)";
      break;
    }
    case "spendingspeed": {
      choice2 = string;
      document.getElementById("spendingspeed").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("spendingspeed").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("security").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("security").style.backgroundColor =
        "rgb(0, 123, 255)";
      break;
    }
  }
}

function enableSubmit() {
  if ((choice1 && choice2) !== "") {
    document.getElementById("submit").disabled = false;
  }
}

function buildCell(i, j, cellClass, cellType, comment) {
  //create + append tempCell
  tempCell = document.createElement(cellType);
  tempCell.innerText = entries[i][j];
  tempCell.id = "cell " + i + " " + j;
  tempCell.classList.add(cellClass, "cell");
  document.getElementById("row " + i).appendChild(tempCell);

  if (comment == true) {
    //create + position + append tempComment
    tempComment = document.createElement("div");
    tempComment.innerText = entries[i][0] + ": " + entries[i][j + 1] + "\n";
    tempComment.id = "comment " + i + " " + j;
    tempComment.classList.add("comment");
    //position
    tempComment.style.top = document
      .getElementById("cell " + i + " " + j)
      .getBoundingClientRect().top;
    tempComment.style.left =
      document.getElementById("cell " + i + " " + j).getBoundingClientRect()
        .left +
      document.getElementById("cell " + i + " " + j).getBoundingClientRect()
        .width;
    //append
    document.getElementById("cell " + i + " " + j).appendChild(tempComment);
  }
}
/* 
    KEY:
    0 - reviewer
    1 - name
    2 - url
    3 - completeinstructions
    4 - comments (completeinstructions)
    5 - setupspeed
    6 - comments_2 (setupspeed)
    7 - cost
    8 - comments_3 (cost)
    9 - privacy
    10 - comments_4 (privacy)
    11 - theftprevention
    12 - comments_5 (theftprevention)
    13 - lossprevention
    14 - comments_6 (lossprevention)
    15 - safesetup
    16 - comments_7 (safesetup)
    17 - inheritancesafety
    18 - comments_8 (inheritancesafety)
    19 - spendspeed
    20 - comments_9 (spendspeed)
    21 - easytosetup
    */
function mergeEntries() {
  let tempArray = [];
  let sortedEntries = [];
  for (let i = 0; i < entries.length; i++) {
    tempArray = [entries[i]];
    for (let j = i + 1; j < entries.length; j++) {
      if (entries[j][1] == entries[i][1]) {
        tempArray.push[entries[j]];
      }
      for (let k = 0; k < tempArray.length; k++) {
        for (let h = 0; h < tempArray[k].length; h++) {
          switch (h) {
            case 3: {
              //complete instructions
            }
          }
        }
      }
    }
    //do math
    /*
        let mergedEntry = [
          entries[i][0],
          entries[i][1],
          entries[i][2],
          entries[i][3] *,
          entries[i][4],
          entries[i][5] **,
          entries[i][6],
          entries[i][7],
          entries[i][8],
          entries[i][9] *,
          entries[i][10],
          entries[i][11] *,
          entries[i][12],
          entries[i][13] *,
          entries[i][14],
          entries[i][15] *,
          entries[i][16],
          entries[i][17] *,
          entries[i][18],
          entries[i][19],
          entries[i][20],
          entries[i][21]
        ]
        */
    //create + push newEntry onto sortedEntries
    //delete the old entries from entries
  }
  /*
  determine all the reviews of the same product,
  identical [i][1](name) but different [i][0](reviewer)
  I think I am guarenteed the different reviewers
  let sortedEntries = []
  each element is the compiled aggregate of the different reviews of the same product
  so go to the first entry,
  find its name
  find all the other entries with that same name
  do math to create a mergedEntry
  push onto sortedEntries
  set entries = sortedEntries;
  */
}

async function fetchData() {
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/od6/public/full?alt=json"
  );
  let data = await response.json();
  console.log(data);
  for (let i = 0; i < data.feed.entry.length; i++) {
    if (data.feed.entry[i].gsx$completeinstructions.$t <= 3) {
      continue;
    }
    /*
    if (choice1 = "privacy") {

    }
    */
    let newEntry = [
      data.feed.entry[i].gsx$reviewer.$t,
      data.feed.entry[i].gsx$name.$t,
      data.feed.entry[i].gsx$url.$t,
      data.feed.entry[i].gsx$completeinstructions.$t,
      data.feed.entry[i].gsx$comments.$t,
      data.feed.entry[i].gsx$setupspeed.$t,
      data.feed.entry[i].gsx$comments_2.$t,
      data.feed.entry[i].gsx$cost.$t,
      data.feed.entry[i].gsx$comments_3.$t,
      data.feed.entry[i].gsx$privacy.$t,
      data.feed.entry[i].gsx$comments_4.$t,
      data.feed.entry[i].gsx$theftprevention.$t,
      data.feed.entry[i].gsx$comments_5.$t,
      data.feed.entry[i].gsx$lossprevention.$t,
      data.feed.entry[i].gsx$comments_6.$t,
      data.feed.entry[i].gsx$safesetup.$t,
      data.feed.entry[i].gsx$comments_7.$t,
      data.feed.entry[i].gsx$inheritancesafety.$t,
      data.feed.entry[i].gsx$comments_8.$t,
      data.feed.entry[i].gsx$spendspeed.$t,
      data.feed.entry[i].gsx$comments_9.$t,
      data.feed.entry[i].gsx$easytosetupgreatux.$t,
    ];
    entries.push(newEntry);
  }
  console.log(entries);

  for (let i = 0; i < entries.length; i++) {
    tempRow = document.createElement("div");
    tempRow.classList.add("row");
    tempRow.id = "row " + i;
    document.getElementById("matrix").appendChild(tempRow);
    for (let j = 0; j < entries[i].length; j++) {
      switch (j) {
        case 1: {
          buildCell(i, j, "name", "div");
          break;
        }
        case 2: {
          buildCell(i, j, "url", "a");
          break;
        }
        case 3: {
          buildCell(i, j, "completeinstructions", "div", true);
          break;
        }
        case 5: {
          buildCell(i, j, "setupspeed", "div", true);
          break;
        }
        case 7: {
          buildCell(i, j, "cost", "div", true);
          break;
        }
        case 9: {
          buildCell(i, j, "privacy", "div", true);
          break;
        }
        case 11: {
          buildCell(i, j, "theftprevention", "div", true);
          break;
        }
        case 13: {
          buildCell(i, j, "lossprevention", "div", true);
          break;
        }
        case 15: {
          buildCell(i, j, "safesetup", "div", true);
          break;
        }
        case 17: {
          buildCell(i, j, "inheritancesafety", "div", true);
          break;
        }
        case 19: {
          buildCell(i, j, "spendspeed", "div", true);
          break;
        }
        case 21: {
          buildCell(i, j, "easytosetup", "div");
        }
        default: {
          break;
        }
      }
    }
    console.log(document.getElementById("row " + i));
  }
}

function handleSubmit() {
  document.getElementById("first-page").hidden = true;
  document.getElementById("first-page").style.display = "none";
  fetchData();
  document.getElementById("second-page").hidden = false;
}
