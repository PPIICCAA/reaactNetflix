/*

import series from "./list.js"
import numberRandom from "./numberRandom.js"
import videojs from "video.js"


// https://www.youtube.com/embed/aiCX7FXaYfo?autoplay=1&mute=1

function controlVideo(Mute,video) {
    console.log("h1")
    let Newvideo = videojs(document.getElementById(video), {})
if (Mute.innerHTML == '<img src="./img/mute.svg">') {
    Newvideo.muted(false)
    Mute.innerHTML = '<img src="./img/sound.svg"></img>'
}   else if (Newvideo.paused()) {
    Newvideo.play()
    Newvideo.addClass("vjs-has-started")
    Newvideo.muted(false)
    Mute.innerHTML = '<img src="./img/sound.svg"></img>'
} else {
    Mute.innerHTML = '<img src="./img/mute.svg"></img>'
    Newvideo.muted(true)
}
}
var player = videojs(document.getElementById("my-video"), {});
let buttonMute = document.querySelector(".play")

player.playlist(series);

player.playlist.currentItem(numberRandom)

setInterval(function(){ 
if (player.cache_.currentTime >= 60){
    player.pause()
    player.currentTime(0)
    buttonMute.innerHTML = '<img src="./img/recargar.svg"></img>'
    player.removeClass("vjs-has-started")
    document.querySelector(".descriv").classList.remove("disappear")
    document.querySelector(".synopsis").classList.remove("disappear")
    document.querySelector(".firsttitle").classList.remove("animationtitle")
} else if (player.cache_.currentTime < 6 && player.cache_.currentTime > 1) {
    document.querySelector(".descriv").classList.add("disappear")
    document.querySelector(".synopsis").classList.add("disappear")
    document.querySelector(".firsttitle").classList.add("animationtitle")
}
else {
    return  
}
}, 3000);
export default controlVideo
/*
const head = document.querySelector(".head")
const topOfHead = head.offsetTop;
function header() {
if (window.scrollY > topOfHead){
    head.style.paddingtop = head.offsetHeight + "px"
    head.style.position = "fixed"
    head.style.background = "black"
} else {
    head.style.paddingTop = 0;
    head.style.position = "relative"
    head.style.background = "transparent"
}
}


window.addEventListener("scroll", header)
*/
