body = document.querySelector("#Body");
cover = document.querySelector("#Screen-cover");

newWidth = body.offsetWidth;
newWidth2 = cover.offsetWidth;

cover.style.width = newWidth2 + "px";
body.style.width = newWidth + "px";