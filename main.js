let weekContainers = document.getElementsByClassName("week-container");
let descriptions = ["Vecka 53 test134",
                    "Vecka 52 test12",
                    "Vecka 51 test7",
                    "Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2",
                    "Vecka 49 test3",
                    "Vecka 48 test4",
                    "Vecka 47 test5"]
let currentWeek = 47 + descriptions.length - 1;

for (var description of descriptions) {
  let weekContainer = document.createElement("div");
  weekContainer.className = "week-container";
  
  let leftContainer = document.createElement("div");
  leftContainer.className = "left-container";
  
  let week = document.createElement("button");
  week.className = "week";
  week.innerHTML = "V" + currentWeek;
  
  let dottedLine = document.createElement("div");
  dottedLine.className = "dotted-line";

  let line = document.createElement("vl");
  line.className = "line closed";
  
  let weekDescription = document.createElement("div");
  weekDescription.className = "week-description closed";
  weekDescription.innerHTML = description

  leftContainer.appendChild(week);
  leftContainer.appendChild(dottedLine);

  weekContainer.appendChild(leftContainer);
  weekContainer.appendChild(line);
  weekContainer.appendChild(weekDescription);

  document.getElementById("weeks-container").appendChild(weekContainer)

  currentWeek--;
}



for (var weekContainer of weekContainers) {
  let children = weekContainer.children
  let week = children[0].children[0]
  week.addEventListener("mouseenter", () => {
    for (var weekContainer of weekContainers) {
      let currentChildren = weekContainer.children
      currentChildren[1].classList.add("closed");
      currentChildren[2].classList.add("closed");
    }
    children[1].classList.remove("closed");
    children[2].classList.remove("closed");
  })

  week.addEventListener("mouseout", () => {
    children[1].classList.remove("closed");
    children[2].classList.remove("closed");
  })
}