let p = (text) => console.log(text);

window.onload = eventHandler;

let divider = "=====\n";
let displayInterval = 250;
let isTurboEnabled = false;

let animationHandler;
let frames;
let currentIndex;

const size = [];
size["Tiny"] = "7pt";
size["Small"] = "10pt";
size["Medium"] = "12pt";
size["Large"] = "16pt";
size["Extra Large"] = "24pt";
size["XXL"] = "32pt";

function eventHandler() {
    p(ANIMATIONS);
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("animation").onchange = selectedAnimation;
    document.getElementById("fontsize").onchange = fontSize;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("turbo").ariaChecked = turboEffect;

}

function startAnimation() {
    let selectedAnimation = document.getElementById("text-area").value;
    frames = selectedAnimation.split(divider);
    currentIndex = 0;
    animationHandler = setInterval(frameIterator, displayInterval);
    enableControl(true);
}
function selectedAnimation() {
    let Selection = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[Selection];
}

function frameIterator() {
    document.getElementById("text-area").value = frames[currentIndex];
    currentIndex = (currentIndex + 1) % frames.length;
}

function fontSize() {
    let currentSize = document.getElementById("fontsize").value;
    document.getElementById("text-area").value.fontSize = size[currentSize];

}

function enableControl(displayedAnimation) {
    document.getElementById("start").disabled = displayedAnimation;
    document.getElementById("stop").disabled = !displayedAnimation;
    document.getElementById("text-area").disabled = displayedAnimation;

}

function stopAnimation(){
    clearInterval(animationHandler);
    enableControl(false);
    resetTextarea()
   
}

function resetTextarea(){
    if (frames){
        let selectedAnimation = frames.join (divider);
        document.getElementById("text-area").value = selectedAnimation;
    }
}

function turboEffect(){
    let isTurboEnabled = document.getElementById("turbo");
    if(isTurboEnabled.checked != true){
        return displayInterval = 50;
    }
    return displayInterval = 250;
}

