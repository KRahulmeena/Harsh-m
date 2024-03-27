const video = document.getElementById("myVideo");
let hidd = document.querySelector(".vdo");
hidd.setAttribute("class", "hidden");
video.classList.add("hidden");
// Play the video
function playVideo() {
  video.play();
}

// Pause the video
function pauseVideo() {
  video.pause();
}

// Stop the video
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

const button = document.getElementById("fullscreenButton");

button.addEventListener("click", function () {
  video.classList.toggle("fullscreen");
  hidd.setAttribute("class", "vdo")
  if (video.paused) {
    hidd.setAttribute("class", "vdo");
    video.classList.remove("hidden");
    video.play();
  } else {
    hidd.setAttribute("class", "hidden");
    video.classList.add("hidden");
    video.pause();
  }
});

button.addEventListener("click", function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
