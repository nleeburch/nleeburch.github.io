var choice1 = "";
var choice2 = "";
var entries = [];
let sortedEntries = [];
let profileList = [];
let tempArray = [];
let tempRow = {};
let tempCell = {};
let tempComment = {};
let mergeFlag = 1;
let filterFlag = 1;

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
      document.getElementById("privacy-2").style.border = "3px solid black";
      document.getElementById("setupspeed-2").style.border =
        "0px solid rgb(0, 123, 255)";
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
      document.getElementById("privacy-2").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("setupspeed-2").style.border = "3px solid black";
      break;
    }
    case "security": {
      choice2 = string;
      document.getElementById("security").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("security").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("spendspeed").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("spendspeed").style.backgroundColor =
        "rgb(0, 123, 255)";
      document.getElementById("security-2").style.border = "3px solid black";
      document.getElementById("spendspeed-2").style.border =
        "0px solid rgb(0, 123, 255)";
      break;
    }
    case "spendspeed": {
      choice2 = string;
      document.getElementById("spendspeed").style.backgroundColor =
        "rgb(0, 100, 200)";
      document.getElementById("spendspeed").style.border =
        "5px solid rgb(146, 199, 255)";
      document.getElementById("security").style.border =
        "0px solid rgb(0, 123, 255)";
      document.getElementById("security").style.backgroundColor =
        "rgb(0, 123, 255)";
      document.getElementById("spendspeed-2").style.border = "3px solid black";
      document.getElementById("security-2").style.border =
        "0px solid rgb(0, 123, 255)";
      break;
    }
  }
}

function handleProfileCheck(id) {
  if (document.getElementById(id).checked) {
    profileList.push(id);
  } else {
    for (let i = 0; i < profileList.length; i++) {
      if (profileList[i] == id) {
        profileList.splice(i, 1);
      }
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
  if (cellType == "a") {
    tempCell.setAttribute("href", entries[i][j]);
  }
  document.getElementById("row " + i).appendChild(tempCell);

  if (comment == true && entries[i][j + 1] !== "") {
    //create + position + append tempComment
    tempComment = document.createElement("div");
    if (cellClass == "name") {
      tempComment.innerText = "Reviewers: " + entries[i][0];
    } else {
      tempComment.innerText = entries[i][j + 1];
    }
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

function mergeEntries() {
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
  while (entries.length > 0) {
    tempArray = [entries[0]];
    for (let j = 1; j < entries.length; j++) {
      //if we find a different review of the same name
      if (entries[j][1] == entries[0][1]) {
        //push that review onto tempArray
        tempArray.push(entries[j]);
        //then splice the review out of entries
        entries.splice(j, 1);
      }
    }
    //once you are all done, go ahead and splice out the first review
    entries.splice(0, 1);
    //create a mergedEntry
    let mergedEntry = tempArray[0];
    for (let a = 4; a <= 20; a += 2) {
      if (a == 6 || a == 20) {
        mergedEntry[a] =
          mergedEntry[0] +
          ": " +
          mergedEntry[a] +
          " (rating: " +
          mergedEntry[a - 1] +
          ")";
      }
    }
    let h = 1;
    for (h; h < tempArray.length; h++) {
      mergedEntry[0] += ", " + tempArray[h][0];
      mergedEntry[3] = parseInt(mergedEntry[3]) + parseInt(tempArray[h][3]);
      mergedEntry[4] += "\n" + tempArray[h][0] + ": " + tempArray[h][4];
      mergedEntry[5] += "*";
      mergedEntry[6] +=
        "\n" +
        tempArray[h][0] +
        ": " +
        tempArray[h][6] +
        "\n (rating: " +
        tempArray[h][5] +
        ")";
      mergedEntry[8] += "\n" + tempArray[h][0] + ": " + tempArray[h][8];
      mergedEntry[9] = parseInt(mergedEntry[9]) + parseInt(tempArray[h][9]);
      mergedEntry[10] += "\n" + tempArray[h][0] + ": " + tempArray[h][10];
      mergedEntry[11] = parseInt(mergedEntry[11]) + parseInt(tempArray[h][11]);
      mergedEntry[12] += "\n" + tempArray[h][0] + ": " + tempArray[h][12];
      mergedEntry[13] = parseInt(mergedEntry[13]) + parseInt(tempArray[h][13]);
      mergedEntry[14] += "\n" + tempArray[h][0] + ": " + tempArray[h][14];
      mergedEntry[15] = parseInt(mergedEntry[15]) + parseInt(tempArray[h][15]);
      mergedEntry[16] += "\n" + tempArray[h][0] + ": " + tempArray[h][16];
      mergedEntry[17] = parseInt(mergedEntry[17]) + parseInt(tempArray[h][17]);
      mergedEntry[18] += "\n" + tempArray[h][0] + ": " + tempArray[h][18];
      mergedEntry[19] += "*";
      mergedEntry[20] +=
        "\n" +
        tempArray[h][0] +
        ": " +
        tempArray[h][20] +
        "\n (rating: " +
        tempArray[h][19] +
        ")";
    }
    if (h >= 1) {
      mergedEntry[3] /= h;
      mergedEntry[9] /= h;
      mergedEntry[11] /= h;
      mergedEntry[13] /= h;
      mergedEntry[15] /= h;
      mergedEntry[17] /= h;
    }
    sortedEntries.push(mergedEntry);
    i = 0;
  }
  return sortedEntries;
}

async function fetchData() {
  entries = [];
  sortedEntries = [];
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/od6/public/full?alt=json"
  );
  let data = await response.json();
  for (let i = 0; i < data.feed.entry.length; i++) {
    for (let j = 0; j < profileList.length; j++) {
      if (data.feed.entry[i].gsx$reviewer.$t == profileList[j]) {
        j = -1;
        i++;
      }
    }
    if (filterFlag == 1) {
      if (choice1 == "privacy" && data.feed.entry[i].gsx$privacy.$t <= 3) {
        continue;
      } else if (
        choice1 == "setupspeed" &&
        parseInt(data.feed.entry[i].gsx$setupspeed.$t) >= 1
      ) {
        continue;
      }
      if (
        choice2 == "security" &&
        (data.feed.entry[i].gsx$theftprevention.$t <= 3 ||
          data.feed.entry[i].gsx$lossprevention <= 3)
      ) {
        continue;
      } else if (
        choice2 == "spendspeed" &&
        parseInt(data.feed.entry[i].gsx$spendspeed.$t) >= 10
      ) {
        continue;
      }
    }
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

  if (mergeFlag == 1) {
    entries = mergeEntries();
  }

  for (let i = 0; i < entries.length; i++) {
    tempRow = document.createElement("div");
    tempRow.classList.add("row");
    tempRow.id = "row " + i;
    document.getElementById("matrix").appendChild(tempRow);
    for (let j = 0; j < entries[i].length; j++) {
      switch (j) {
        case 1: {
          buildCell(i, j, "name", "div", true);
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
  }
}

function buildLegendCell(className, text) {
  let cell = document.createElement("div");
  cell.classList.add(className, "cell", "legend");
  cell.innerText = text;
  return cell;
}

function buildLegend() {
  tempRow = document.createElement("div");
  tempRow.classList.add("row", "legend");

  tempRow.appendChild(buildLegendCell("name", "Name"));
  tempRow.appendChild(buildLegendCell("url", "URL"));
  tempRow.appendChild(
    buildLegendCell("completeinstructions", "Complete Instructions")
  );
  tempRow.appendChild(buildLegendCell("setupspeed", "Setup Speed"));
  tempRow.appendChild(buildLegendCell("cost", "Cost"));
  tempRow.appendChild(buildLegendCell("privacy", "Privacy"));
  tempRow.appendChild(buildLegendCell("theftprevention", "Theft Prevention"));
  tempRow.appendChild(buildLegendCell("lossprevention", "Loss Prevention"));
  tempRow.appendChild(buildLegendCell("safesetup", "Safe Setup"));
  tempRow.appendChild(
    buildLegendCell("inheritancesafety", "Inheritance Safety")
  );
  tempRow.appendChild(buildLegendCell("spendspeed", "Spend Speed"));
  tempRow.appendChild(buildLegendCell("easytosetup", "Easy To Setup/Great UX"));

  document.getElementById("matrix").appendChild(tempRow);
  /*
  <div class="row legend" >
    <div class="name cell legend">Name</div>
    <div class="url cell legend">URL</div>
    <div class="completeinstructions cell legend">Complete Instructions</div>
    <div class="setupspeed cell legend">Setup Speed</div>
    <div class="cost cell legend">Cost</div>
    <div class="privacy cell legend">Privacy</div>
    <div class="theftprevention cell legend">Theft Prevention</div>
    <div class="lossprevention cell legend">Loss Prevention</div>
    <div class="safesetup cell legend">Safe Setup</div>
    <div class="inheritancesafety cell legend">Inheritance Safety</div>
    <div class="spendspeed cell legend">Spend Speed</div>
    <div class="easytosetup cell legend">Easy To Setup/Great UX</div>
  </div>
  */
}

function handleReload() {
  document.getElementById("matrix").innerHTML = "";
  buildLegend();
  fetchData();
}

function handleMergeUnmerge() {
  mergeFlag = mergeFlag ? 0 : 1;
  if (mergeFlag) {
    document.getElementById("merge/unmerge").innerText = "Unmerge Data";
  } else {
    document.getElementById("merge/unmerge").innerText = "Merge Data";
  }
  handleReload();
}

function handleFilterUnfilter() {
  filterFlag = filterFlag ? 0 : 1;
  if (filterFlag) {
    document.getElementById("filter/unfilter").innerText = "Unfilter Data";
  } else {
    document.getElementById("filter/unfilter").innerText = "Filter Data";
  }
  handleReload();
}

function handleSubmit() {
  document.getElementById("first-page").hidden = true;
  document.getElementById("first-page").style.display = "none";
  handleButton(choice1);
  handleButton(choice2);
  fetchData();
  document.getElementById("second-page").hidden = false;
}
