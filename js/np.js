var links = document.getElementsByClassName('copyjs');

Array.from(links).forEach(element => {
  var clipboard = new ClipboardJS(element);
  console.log(element);
  element.onclick = function(e) {
    e.preventDefault();
    var orig = element.innerHTML;
    element.innerHTML = "Copied!";
    setTimeout(function(){
      element.innerHTML = orig;
    }, 2000);
  };
});
