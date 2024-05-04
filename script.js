function addVideo() {
  var videoUrl = document.getElementById("videoInput").value.trim();
  var videoPlayer = document.getElementById("videoPlayer");

  if (videoUrl !== "") {
    if (isValidVideoUrl(videoUrl)) {
      var video = document.createElement("video");
      video.autoplay = true;
      video.controls = true;

      var source = document.createElement("source");
      source.src = videoUrl;
      source.type = getVideoType(videoUrl);

      video.appendChild(source);

      videoPlayer.appendChild(video);
    } else {
      alert("Please enter a valid video link!");
    }
  } else {
    alert("Please enter a video link!");
  }
}

function isValidVideoUrl(url) {
  var videoRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=)?|youtu\.be\/)([\w-]+)(\?[\w=&-]*)?$/;
  return videoRegex.test(url);
}

function getVideoType(url) {
  return "video/mp4";
}
