const weekContainers = document.getElementsByClassName("week-container");
const descriptions = ["Made some changes to the progress website. We added three different subpages, one for Home, Progress, and Group Members.<br><br>We have looked at different data sets for recipes and ingredients and found one that contains ingredients, cook time, ratings, and images.<br><br>We also created a sketch for the recipe application in Figma.",
                      "We initialized the progress website."]
let currentWeek = 44 + descriptions.length - 1;

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
  week.addEventListener("mousedown", () => {
    for (const weekContainer of weekContainers) {
      const currentChildren = weekContainer.children
      currentChildren[1].classList.add("closed");
      currentChildren[2].classList.add("closed");
    }
    children[1].classList.remove("closed");
    children[2].classList.remove("closed");
  })
}
