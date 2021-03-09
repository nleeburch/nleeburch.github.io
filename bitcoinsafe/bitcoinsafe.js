let entries = [];
let contributors = [];
let rating = {
  1: "Very Low",
  2: "Low",
  3: "Marginal",
  4: "High",
  5: "Very High",
  instant: "Instant",
  free: "Free",
};
let highSecurity = [
  "Yeti Bitcoin Wallet Level 3",
  "Yeti Bitcoin Wallet Level 2",
  "Yeti Bitcoin Wallet Level 1",
  "Jade Preconfigured with Daily Use Phone 2 of 2",
];
let fastSetup = [
  "Wasabi Wallet",
  "Trezor Standard Setup",
  "Ledger Nano S Standard Setup",
  "BlueWallet on Daily Phone",
];

/*
KEY:
0 - name
1 - url
2 - instruction quality
3 - privacy
4 - theft prevention
5 - loss prevention
6 - inheritance safety
7 - setup safety
8 - spending speed
9 - setup time
10 - cost
*/

function eraseProducts() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("product-" + i + "-title").innerText = "";
  }
  for (let i = 1; i <= 4; i++) {
    document.getElementById("product-" + i + "-list").innerHTML = "";
  }
}

async function handleToggle() {
  if (!document.getElementById("toggle").checked) {
    document.getElementById("highsecurity").style.fontWeight = "bold";
    document.getElementById("fastsetup").style.fontWeight = "normal";
  } else {
    document.getElementById("highsecurity").style.fontWeight = "normal";
    document.getElementById("fastsetup").style.fontWeight = "bold";
  }
  eraseProducts();
  fetchData();
}

function buildElement(i, j, id, text, type, checked) {
  if (id == "name") {
    document.getElementById("product-" + (4 - i) + "-title").innerText =
      entries[i][j];
  } else if (id == "url") {
    let list = document.createElement("li");
    let category = document.createElement(type);
    category.innerText = entries[i][j];
    category.href = entries[i][j];
    category.style.textDecoration = "underline";
    if (4 - i == 3) {
      category.style.color = "white";
    } else {
      category.style.color = "#181059";
    }
    document.getElementById("product-" + (4 - i)).onclick = function () {
      location.href = entries[i][j];
    };
    list.appendChild(category);
    document.getElementById("product-" + (4 - i) + "-list").appendChild(list);
  } else {
    let list = document.createElement("li");
    let category = document.createElement(type);
    category.innerText = text + ": " + entries[i][j];
    if (checked == true) {
      category.style.fontWeight = "bold";
    } else {
      category.style.fontWeight = "normal";
      category.style.opacity = 0.68;
    }
    list.appendChild(category);
    document.getElementById("product-" + (4 - i) + "-list").appendChild(list);
  }
}

function showFour() {
  let checkFlag = !document.getElementById("toggle").checked;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < entries[i].length; j++) {
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
            "instructionquality",
            "Instruction Quality",
            "div"
          );
          break;
        }
        case 3: {
          buildElement(i, j, "privacy", "Privacy", "div");
          break;
        }
        case 4: {
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
        case 5: {
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
        case 6: {
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
        case 7: {
          buildElement(i, j, "setupsafety", "Setup Safety", "div", checkFlag);
          break;
        }
        case 8: {
          buildElement(i, j, "spendingspeed", "Spending Speed", "div");
          break;
        }
        case 9: {
          buildElement(i, j, "setuptime", "Setup Time", "div", !checkFlag);
          break;
        }
        case 10: {
          buildElement(i, j, "cost", "Cost", "div");
          break;
        }
      }
    }
  }
}

async function fetchContributors() {
  contributors = [];
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/6/public/full?alt=json"
  );
  let data = await response.json();
  console.log(data);
  for (let i = 0; i < data.feed.entry.length; i++) {
    let newEntry = [
      data.feed.entry[i].gsx$name.$t,
      data.feed.entry[i].gsx$twittername.$t,
      data.feed.entry[i].gsx$description.$t,
    ];
    contributors.push(newEntry);
  }

  for (let i = 0; i < contributors.length; i++) {
    let profile = document.createElement("div");
    profile.classList.add("col-lg-3", "profile");
    let image = document.createElement("img");
    image.src = "reviewers/JWWeatherman_.jpg";
    image.classList.add("profile-picture");
    let name = document.createElement("h2");
    name.innerText = contributors[i][0];
    let twitterName = document.createElement("a");
    twitterName.href = "https://twitter.com/" + contributors[i][1];
    if (contributors[i][1] !== "") {
      twitterName.innerText = "@" + contributors[i][1];
    }
    let description = document.createElement("p");
    description.innerText = contributors[i][2];
    profile.appendChild(image);
    profile.appendChild(name);
    profile.appendChild(twitterName);
    profile.appendChild(description);
    profile.onclick = function () {
      location.href = twitterName.href;
    };
    document.getElementById("contributors").appendChild(profile);
  }
}

async function fetchData() {
  entries = [];
  let response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1BxAiGnhCfFifd6T6Ky1m3gwdePvuS6QteXsc5KadlPI/2/public/full?alt=json"
  );
  let data = await response.json();
  if (!document.getElementById("toggle").checked) {
    for (let i = 0; i < data.feed.entry.length; i++) {
      for (let j = 0; j < highSecurity.length; j++) {
        if (data.feed.entry[i].gsx$name.$t == highSecurity[j]) {
          let newEntry = [
            data.feed.entry[i].gsx$name.$t,
            data.feed.entry[i].gsx$url.$t,
            data.feed.entry[i].gsx$instructionquality.$t,
            data.feed.entry[i].gsx$privacy_2.$t,
            data.feed.entry[i].gsx$theftprevention.$t,
            data.feed.entry[i].gsx$lossprevention.$t,
            data.feed.entry[i].gsx$inheritancesafety.$t,
            data.feed.entry[i].gsx$setupsafety.$t,
            data.feed.entry[i].gsx$spendingspeed.$t,
            data.feed.entry[i].gsx$setuptime_3.$t,
            data.feed.entry[i].gsx$cost.$t,
          ];
          entries.push(newEntry);
        }
      }
    }
  } else {
    for (let i = 0; i < data.feed.entry.length; i++) {
      for (let j = 0; j < fastSetup.length; j++) {
        if (data.feed.entry[i].gsx$name.$t == fastSetup[j]) {
          let newEntry = [
            data.feed.entry[i].gsx$name.$t,
            data.feed.entry[i].gsx$url.$t,
            data.feed.entry[i].gsx$instructionquality.$t,
            data.feed.entry[i].gsx$privacy_2.$t,
            data.feed.entry[i].gsx$theftprevention.$t,
            data.feed.entry[i].gsx$lossprevention.$t,
            data.feed.entry[i].gsx$inheritancesafety.$t,
            data.feed.entry[i].gsx$setupsafety.$t,
            data.feed.entry[i].gsx$spendingspeed.$t,
            data.feed.entry[i].gsx$setuptime_3.$t,
            data.feed.entry[i].gsx$cost.$t,
          ];
          entries.push(newEntry);
        }
      }
    }
  }
  showFour();
}
handleToggle();
fetchContributors();
