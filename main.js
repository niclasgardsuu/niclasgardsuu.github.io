const weekContainers = document.getElementsByClassName("week-container");
const descriptions = ["Vecka 53 test134",
                    "Vecka 52 test12",
                    "Vecka 51 test7",
                    "Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2 Vecka 50 test2",
                    "Vecka 49 test3",
                    "Vecka 48 test4",
                    "Vecka 47 test5"]
let currentWeek = 47 + descriptions.length - 1;

for (const description of descriptions) {
  const weekContainer = document.createElement("div");
  weekContainer.className = "week-container";
  
  const leftContainer = document.createElement("div");
  leftContainer.className = "left-container";
  
  const week = document.createElement("button");
  week.className = "week";
  week.innerHTML = "V" + currentWeek;
  
  const dottedLine = document.createElement("div");
  dottedLine.className = "dotted-line";

  const line = document.createElement("vl");
  line.className = "line closed";
  
  const weekDescription = document.createElement("div");
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




for (const weekContainer of weekContainers) {
  const children = weekContainer.children
  const week = children[0].children[0]
  week.addEventListener("mouseenter", () => {
    for (const weekContainer of weekContainers) {
      const currentChildren = weekContainer.children
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
