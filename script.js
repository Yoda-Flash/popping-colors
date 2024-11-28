let blue_circle = document.getElementById("blue_circle");
let red_circle = document.getElementById("red_circle");
let green_circle = document.getElementById("green_circle");
let pink_circle = document.getElementById("pink_circle");
let purple_circle = document.getElementById("purple_circle");
let light_blue_circle = document.getElementById("light_blue_circle");
let orange_circle = document.getElementById("orange_circle");
blue_circle.style.opacity = "100%";
red_circle.style.opacity = "100%";
green_circle.style.opacity = "100%";
pink_circle.style.opacity = "100%";
purple_circle.style.opacity = "100%";
light_blue_circle.style.opacity = "100%";
orange_circle.style.opacity = "100%";
blue_circle.dataset.hidden = "false";
red_circle.dataset.hidden = "false";
green_circle.dataset.hidden = "false";
pink_circle.dataset.hidden = "false";
purple_circle.dataset.hidden = "false";
light_blue_circle.dataset.hidden = "false";
orange_circle.dataset.hidden = "false";

var score = document.getElementById("score");
var current_score = 0;

const changeState = (id) => {
    var circle = document.getElementById(id);
    circle.style.opacity = circle.dataset.hidden === "false" ? "0" : "1";
    if (circle.style.opacity === "0"){
        circle.dataset.hidden = "true";
   } else if (circle.style.opacity !== "0"){
        circle.dataset.hidden = "false";
   }
    current_score += 1;
    score.innerHTML = "Your score is: " + current_score;
}

const temporaryShow = (id) => {
    var circle = document.getElementById(id);
    if (circle.style.opacity === "0") {
        circle.style.opacity = "100%";
    }

}

const hide = (id) => {
    var circle = document.getElementById(id);
    if (circle.dataset.hidden === "true"){
        circle.style.opacity = "0";
    }
}