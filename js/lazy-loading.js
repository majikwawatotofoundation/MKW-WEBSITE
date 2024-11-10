document.addEventListener('DOMContentLoaded', ()=>{
const video = document.querySelector(".watoto-video");
const placeholder = document.querySelector(".video-placeholder");

video.addEventListener("canplay", () => {
  placeholder.style.opacity = "0"; // Fade out the black placeholder
  video.style.opacity = "1"; // Fade in the video
});
});

