const errsound = new Audio("Sounds/beep.wav");
var form = document.querySelector("#Input-bar");
var reset = setInterval(refresh, 100);

document.addEventListener('keydown', c => {

  if (c.repeat) { return }

  if (c.keyCode == 38)
  {
    document.getElementById("Main").scrollTop -= 80;
  }
  else if (c.keyCode == 40)
  {
    document.getElementById("Main").scrollTop += 80;
  }
  else if(c.keyCode == 13)
  {
    collectForm();
  }

});
  
function refresh(){
  form.focus();
  
}

function collectForm()
{
  var entry = form.value.toLowerCase();

  form.value = "";

  if(entry == "" || entry == null) return;

  if(entry == "white" || entry == "amber" || entry == "blue" || entry == "green")
  {
    setTheme(entry);
  }
  else if(entry == "exit")
  {
    window.location = "index.html"
  }
  else
  {
    errsound.play();
  }
}

const setTheme = theme => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}
  
getTheme();