function addVideo() {
  var videoUrl = document.getElementById("videoInput").value.trim();
  var videoPlayer = document.getElementById("videoPlayer");

  if (videoUrl !== "") {
    if (isValidVideoUrl(videoUrl)) {
      if (isYouTubeUrl(videoUrl)) {
        // Handle YouTube video URL
        var videoId = getYouTubeVideoId(videoUrl);
        if (videoId) {
          var iframe = document.createElement("iframe");
          iframe.width = "560"; // You can adjust these dimensions as needed
          iframe.height = "315";
          iframe.src = "https://www.youtube.com/embed/" + videoId;
          iframe.frameborder = "0";
          iframe.allowFullscreen = true;

          videoPlayer.innerHTML = ""; // Clear previous content
          videoPlayer.appendChild(iframe);
        } else {
          alert("Invalid YouTube video URL!");
        }
      }  else {
        // Handle direct video file URL
        var video = document.createElement("video");
        video.autoplay = true;
        video.controls = true;

        var source = document.createElement("source");
        source.src = videoUrl;
        source.type = getVideoType(videoUrl);

        video.appendChild(source);

        videoPlayer.innerHTML = ""; // Clear previous content
        videoPlayer.appendChild(video);

    }
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

function isYouTubeUrl(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getYouTubeVideoId(url) {
  var videoId = "";
  if (url.includes("youtube.com")) {
    var match = url.match(/[?&]v=([^&]+)/);
    videoId = match && match[1] ? match[1] : "";
  } else if (url.includes("youtu.be")) {
    var segments = url.split("/");
    videoId = segments[segments.length - 1];
  }
  return videoId;
}

function getVideoType(url) {
  // Example implementation; adjust as needed based on supported video types
  if (url.endsWith('.mp4')) {
    return "video/mp4";
  } else if (url.endsWith('.webm')) {
    return "video/webm";
  } else if (url.endsWith('.ogg')) {
    return "video/ogg";
  } else {
    return "video/mp4"; 
  }
}

