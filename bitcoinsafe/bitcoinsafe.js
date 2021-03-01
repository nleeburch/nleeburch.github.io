let entries = [];
let sortedEntries = [];
let rating = {
  0: "Instant",
  1: "Terrible",
  2: "Poor",
  3: "Marginal",
  4: "Good",
  5: "Excellent",
};

/* 
  it didn't upload correctly
    KEY:
    0 - name
    1 - url
    2 - completeinstructions
    3 - comments (completeinstructions)
    4 - setupspeed
    5 - comments_2 (setupspeed)
    6 - cost
    7 - comments_3 (cost)
    8 - privacy *
    9 - comments_4 (privacy)
    10 - theftprevention *
    11 - comments_5 (theftprevention)
    12 - lossprevention *
    13 - comments_6 (lossprevention)
    14 - safesetup *
    15 - comments_7 (safesetup)
    16 - inheritancesafety *
    17 - comments_8 (inheritancesafety)
    18 - spendspeed
    19 - comments_9 (spendspeed)
    20 - easytosetup

    

    <script src="bitcoinsafe.js"></script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    */

function eraseProducts() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("product-" + i).innerText = "";
  }
}

async function handleToggle() {
  eraseProducts();
  fetchData();
}

function sortEntries() {
  while (entries.length > 0) {
    tempArray = [entries[0]];
    for (let j = 1; j < entries.length; j++) {
      //if we find a different review of the same name
      if (entries[j][0] == entries[0][0]) {
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
    //calculate average ratings
    let h = 1;
    //addition of h values
    for (h; h < tempArray.length; h++) {
      for (let k = 2; k <= 18; k += 2) {
        if (k !== 6) {
          mergedEntry[k] =
            parseFloat(mergedEntry[k]) + parseFloat(tempArray[h][k]);
        }
      }
    }
    //division by h
    if (h > 1) {
      for (let k = 2; k <= 18; k += 2) {
        if (k !== 6) {
          mergedEntry[k] /= h;
        }
      }
    }
    sortedEntries.push(mergedEntry);
    i = 0;
  }

  //filter sortedEntries for High Security
  if (!document.getElementById("toggle").checked) {
    for (let j = 0; j < sortedEntries.length; j++) {
      for (let i = j + 1; i < sortedEntries.length; i++) {
        let x =
          sortedEntries[j][10] + sortedEntries[j][12] + sortedEntries[j][16];
        let y =
          sortedEntries[i][10] + sortedEntries[i][12] + sortedEntries[i][16];
        if (y > x) {
          let temp = sortedEntries[j];
          sortedEntries[j] = sortedEntries[i];
          sortedEntries[i] = temp;
          i = j + 1;
        }
      }
    }
  } else {
    //filter sortedEntries for Fast Setup
    for (let j = 0; j < sortedEntries.length; j++) {
      for (let i = j + 1; i < sortedEntries.length; i++) {
        let x = parseFloat(sortedEntries[j][4]);
        let y = parseFloat(sortedEntries[i][4]);
        if (y < x) {
          //replace [0] with [i] and vice versa
          let temp = sortedEntries[j];
          sortedEntries[j] = sortedEntries[i];
          sortedEntries[i] = temp;
          i = j + 1;
        }
      }
    }
  }

  //reassign qualitative rating after sorting
  for (let h = 0; h < sortedEntries.length; h++) {
    for (let k = 8; k <= 16; k += 2) {
      sortedEntries[h][k] = rating[Math.floor(sortedEntries[h][k])];
    }
    if (sortedEntries[h][4] == 0) {
      sortedEntries[h][4] = "Instant";
    } else {
      sortedEntries[h][4] = parseFloat(sortedEntries[h][4]) + " hour(s)";
    }
    sortedEntries[h][18] = parseFloat(sortedEntries[h][18]) + " minute(s)";
  }
  return sortedEntries;
}

function buildElement(i, j, id, text, type, checked) {
  let category = document.createElement(type);
  category.id = id;
  category.innerText = text + ": " + entries[i][j];
  if (checked == true) {
    category.style.fontWeight = 800;
  }
  document.getElementById("product-" + (4 - i)).appendChild(category);
}

function showFour() {
  let checkFlag = !document.getElementById("toggle").checked;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < sortedEntries.length; j++) {
      switch (j) {
        case 0: {
          buildElement(i, j, "name", "Name", "div");
          break;
        }
        case 1: {
          buildElement(i, j, "url", "URL", "a");
          break;
        }
        case 2: {
          buildElement(
            i,
            j,
            "completeinstructions",
            "Complete Instructions",
            "div"
          );
          break;
        }
        case 4: {
          buildElement(i, j, "setupspeed", "Setup Speed", "div", !checkFlag);
          break;
        }
        case 6: {
          buildElement(i, j, "cost", "Cost", "div");
          break;
        }
        case 8: {
          buildElement(i, j, "privacy", "Privacy", "div");
          break;
        }
        case 10: {
          buildElement(
            i,
            j,
            "theftprevention",
            "Theft Prevention",
            "div",
            checkFlag
          );
          break;
        }
        case 12: {
          buildElement(
            i,
            j,
            "lossprevention",
            "Loss Prevention",
            "div",
            checkFlag
          );
          break;
        }
        case 14: {
          buildElement(i, j, "safesetup", "Safe Setup", "div");
          break;
        }
        case 16: {
          buildElement(
            i,
            j,
            "inheritancesafety",
            "Inheritance Safety",
            "div",
            checkFlag
          );
          break;
        }
        case 18: {
          buildElement(i, j, "spendspeed", "Spend Speed");
          break;
        }
      }
    }
  }
}

async function fetchData() {
  entries = [];
  sortedEntries = [];
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/od6/public/full?alt=json"
  );
  let data = await response.json();
  for (let i = 0; i < data.feed.entry.length; i++) {
    let newEntry = [
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

    for (let i = 0; i < newEntry.length; i++) {
      switch (newEntry[i]) {
        case "Terrible": {
          newEntry[i] = 1;
          break;
        }
        case "Poor": {
          newEntry[i] = 2;
          break;
        }
        case "Marginal": {
          newEntry[i] = 3;
          break;
        }
        case "Good": {
          newEntry[i] = 4;
          break;
        }
        case "Excellent": {
          newEntry[i] = 5;
          break;
        }
        case "Instant": {
          newEntry[i] = 0;
          break;
        }
      }
    }
    entries.push(newEntry);
  }
  entries = sortEntries();
  showFour();
}

fetchData();
