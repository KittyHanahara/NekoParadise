var mclink = document.getElementById("playip");

mclink.onclick = function(e) {
  e.preventDefault();
  mclink.innerHtml = "Copied!";
};
