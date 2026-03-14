// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable inspect shortcuts
document.onkeydown = function (e) {
  // Block F12
  if (e.keyCode == 123) {
    return false;
  }

  // Block Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  // Block Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }

  // Block Ctrl + U (View Source)
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Detect DevTools and clear page
setInterval(function () {
  if (window.outerWidth - window.innerWidth > 160) {
    document.body.innerHTML = "";
  }
}, 1000);
