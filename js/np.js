var links = document.getElementsByClassName('copyjs');

Array.from(links).forEach(element => {
  var clipboard = new ClipboardJS(element);
  element.onclick = function(e) {
    e.preventDefault();
    var orig = element.innerHTML;
    element.innerHTML = "Copied!";
    setTimeout(function(){
      element.innerHTML = orig;
    }, 2000);
  };
});

window.onload = function() {
  intro();
}

function intro() {

  var cover1 = document.getElementById("cover1");
  var cover2 = document.getElementById("cover2");
  var cover3 = document.getElementById("cover3");

  TweenLite.to(cover1, 0.2, {
    ease: Power2.easeInOut,
    left: "-250%",
  });
  TweenLite.to(cover2, 0.2, {
    delay: 0.2,
    ease: Power2.easeInOut,
    left: "150%",
  });
  TweenLite.to(cover3, 0.2, {
    delay: 0.4,
    ease: Power2.easeInOut,
    left: "-250%",
    onComplete: presentLogo
  });
  TweenLite.to(cover4, 0.2, {
    delay: 0.6,
    ease: Power2.easeInOut,
    left: "150%",
  });
}

function presentLogo() {
  var logo = document.getElementsByClassName("logo");
  TweenLite.from(logo[0], 0.8, {
    ease: Power2.easeOut,
    scaleX: 1.5,
    scaleY: 1.5,
  })
}
