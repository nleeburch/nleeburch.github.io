var choice1 = "";
var choice2 = "";
var entries = [];

function enableButton() {
  if ((choice1 && choice2) !== "") {
    document.getElementById("submit").disabled = false;
  }
}

async function fetchData() {
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/od6/public/full?alt=json"
  );
  let data = await response.json();
  for (let i = 0; i < data.feed.entry.length; i++) {
    let newEntry = [
      data.feed.entry[i].gsx$name.$t,
      data.feed.entry[i].gsx$url.$t,
      data.feed.entry[i].gsx$completeinstructions.$t,
      data.feed.entry[i].gsx$setupspeed.$t,
      data.feed.entry[i].gsx$cost.$t,
      data.feed.entry[i].gsx$privacy.$t,
      data.feed.entry[i].gsx$theftprevention.$t,
      data.feed.entry[i].gsx$lossprevention.$t,
      data.feed.entry[i].gsx$safesetup.$t,
      data.feed.entry[i].gsx$inheritancesafety.$t,
      data.feed.entry[i].gsx$comments_8.$t,
    ];
    entries.push(newEntry);
  }

  /*
    KEY:
    0 - name
    1 - url
    2 - completeinstructions
    3 - setupspeed
    4 - cost
    5 - privacy
    6 - theftprevention
    7 - lossprevention
    8 - safesetup
    9 - inheritancesafety
    10 - comments
    */

  let tempRow = {};
  let tempCell = {};
  for (let i = 0; i < entries.length; i++) {
    tempRow = document.createElement("div");
    tempRow.classList.add("row");
    tempRow.id = "row " + i;
    document.getElementById("matrix").appendChild(tempRow);
    for (let j = 0; j < entries[i].length; j++) {
      tempCell = document.createElement("div");
      tempCell.innerText = entries[i][j];
      tempCell.id = "cell " + i + " " + j;
      switch (j) {
        case 0: {
          tempCell.classList.add("name", "cell");
          break;
        }
        case 1: {
          tempCell = document.createElement("a");
          tempCell.href = entries[i][j];
          tempCell.innerText = entries[i][j];
          tempCell.classList.add("url", "cell");
          break;
        }
        case 2: {
          tempCell.classList.add("completeinstructions", "cell");
          break;
        }
        case 3: {
          tempCell.classList.add("setupspeed", "cell");
          break;
        }
        case 4: {
          tempCell.classList.add("cost", "cell");
          break;
        }
        case 5: {
          tempCell.classList.add("privacy", "cell");
          break;
        }
        case 6: {
          tempCell.classList.add("theftprevention", "cell");
          break;
        }
        case 7: {
          tempCell.classList.add("lossprevention", "cell");
          break;
        }
        case 8: {
          tempCell.classList.add("safesetup", "cell");
          break;
        }
        case 9: {
          tempCell.classList.add("inheritancesafety", "cell");
          break;
        }
        case 10: {
          tempCell.classList.add("comments", "cell");
          break;
        }
      }
      document.getElementById("row " + i).appendChild(tempCell);
    }
  }
  console.log(tempRow);
}

function handleClick() {
  document.getElementById("first-page").hidden = true;
  document.getElementById("second-page").hidden = false;
  fetchData();
}
