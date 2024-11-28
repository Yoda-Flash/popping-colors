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

var score = document.getElementById("score");
var current_score = 0;
var hidden = false;

const changeState = (id) => {
    var circle = document.getElementById(id);
    circle.style.opacity = hidden === false ? "0" : "1";
    if (circle.style.opacity === "0"){
        hidden = true;
        console.log("Hidden is" + hidden)
        console.log("Opacity: " + circle.style.opacity);
    } else if (circle.style.opacity !== "0"){
        hidden = false;
        console.log(hidden)
        console.log("Opacity of circle is: " + circle.style.opacity);
    }
    current_score += 1;
    score.innerHTML = "Your score is: " + current_score;
    console.log(hidden)
}

const temporaryShow = (id) => {
    var circle = document.getElementById(id);
    console.log("Hidden is: " + hidden);
    if (hidden === true) {
        console.log("temporarily showing");
        circle.style.opacity = "100%";
    }

}

const hide = (id) => {
    var circle = document.getElementById(id);
    if (hidden === true){
        circle.style.opacity = "0";
        hidden = false;
    }
}