let contentGridElement = document.getElementByID('contentContainer');
let myJSON = [
  {
  "Name" : "Daddy Thom",
  "picture_url" : "https://i.redd.it/xnsrbva7ugu21.jpg",
  "skills" : ["Makes you cry to lower your guard", "Brings down government easily", "Long Ranged Fighter"],
  "disadvantages" : ["Can't hurt Boogalo Billie out of respect", "Low Visibility", "Overrated according to masses"]
},
{
  "Name" : "Boogalo Billie",
  "picture_url" : "https://thenypost.files.wordpress.com/2020/02/billie-eilish-oscars-01.jpg?quality=80&strip=all",
  "skills" : ["Emotional depth suprises adults", "Daddy Thom is useless", "Close Range Brawler"],
  "disadvantages" : ["Not old enough to drink, government destroys her", "Bad guy, everyone wants her dead", "Performance has already peaked for character"]
},
{
  "Name" : "Government Troll",
  "picture_url" : "https://i.insider.com/5e5d2aa1fee23d10847a28f8?width=1100&format=jpeg&auto=webp",
  "skills" : ["Causes complete chaos on the battlefield", "Destroys Boogalo Billie with misguided principles", "WWE Approved Mid Range Grappler"],
  "disadvantages" : ["Can only battle on far right side of screen", "Gets beaten by Daddy Thom's words", "Has been in debate to be patched out for a long time, too volatile"]
}]

for (var i = 0; i < myJSON.length; i++){
  createFighterElements(myJSON[i]);
}


function createFighterElements(incomingJSON) {

let newContentElement = document.createElement("DIV");
newContentElement.style.backgroundColor = Black;
newContentElement.classList.add('contentFighter');

let newContentHeading = document.createElement("H1");
newContentHeading.classList.add('title');
newContentHeading.innerText = incomingJSON['Name'];

newContentElement.appendChild(newContentHeading);

let newImage = document.createElement("IMG");
newImage.src = incomingJSON['picture_url'];
newContentElement.appendChild(newImage);

let newContentSubhead = document.createElement("H3");
newContentSubhead.innerText = "skills:";
newContentElement.appendChild(newContentSubhead);

let newContentSkillChart = document.createElement("UL");
newContentElement.appendChild(newContentSkillChart);

for (var i = 0; i< incomingJSON['skills'].length; i++) {
  var currentSkillChart = incomingJSON['skills'][i];
  var newSkillItem = document.createElement("LI");
  newSkillItem.innerText = currentSkillChart;
  newContentSkillChart.appendChild(newSkillItem);
}

let newContentSecondSubhead = document.createElement("H5");
newContentSecondSubhead.innerText = "disadvantages:";
newContentElement.appendChild(newContentSecondSubhead);

let newContentDisadvantageChart = document.createElement("UL");
newContentElement.appendChild(newContentDisadvantageChart);

for (var i = 0; i< incomingJSON['disadvantages'].length; i++) {
  var currentDisadvantageChart = incomingJSON['disadvantages'][i];
  var newDisadvantageItem = document.createElement("LI");
  newDisadvantageItem.innerText = currentDisadvantageChart;
  newContentDisadvantageChart.appendChild(newDisadvantageItem);
}
 contentGridElement.appendChild(newContentElement);

}
