const weekContainers = document.getElementsByClassName("week-container");
const descriptions = [
  "This week we've completed most of the functionality in the application. A preset system has been implemented that lets users create their own presets to select which metrics they care about the most. The scoring system now scores recipes based on the coefficients chosen in the preset. Each recipe shows what ingredients are missing for the user and if they have all of them, that recipe is marked with a star. When completing a recipe, the amount used for each ingredient is withdrawn from the user's inventory. Apart from that, we've also started implementing the dashboard where we've added the top three recipes.<br><br>Since we are on a good pace, we've moved back our time planning a bit and have started the final report writing early. In the report, the database sections is as good as complete and we have started on some other sections, including introduction, related works, project management, software requirements and implementation of frontend and server.",
  "During this week, we started to implement the application based on the sketches done in Figma.<br><br>We have implemented most of the recipes and ingredients pages, and added stub-pages for the dashboard and account page, aswell as a functionality for searching for recipes.<br><br>For the database, we chose to use SQLite as our driver together with express.js for integration with our application.<br><br>Furthermore, we implemented get and set queries for recipes, ingredients and searching.<br><br>Lastly, we implemented a E2E testing suite using Cypress.",
  "Made some changes to the progress website. We added three different subpages, one for Home, Progress, and Group Members.<br><br>We have looked at different data sets for recipes and ingredients and found one that contains ingredients, cook time, ratings, and images.<br><br>We also created a sketch for the recipe application in Figma.",
  "We initialized the progress website.",
];
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
  weekDescription.innerHTML = description;

  leftContainer.appendChild(week);
  leftContainer.appendChild(dottedLine);

  weekContainer.appendChild(leftContainer);
  weekContainer.appendChild(line);
  weekContainer.appendChild(weekDescription);

  document.getElementById("weeks-container").appendChild(weekContainer);

  currentWeek--;
}

for (const weekContainer of weekContainers) {
  const children = weekContainer.children;
  const week = children[0].children[0];
  week.addEventListener("mousedown", () => {
    for (const weekContainer of weekContainers) {
      const currentChildren = weekContainer.children;
      currentChildren[1].classList.add("closed");
      currentChildren[2].classList.add("closed");
    }
    children[1].classList.remove("closed");
    children[2].classList.remove("closed");
  });
}
