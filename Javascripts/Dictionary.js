const errsound = new Audio("Sounds/beep.wav");

var errtext = document.querySelector("#error");
var input = document.querySelector("#Input-bar");
var load = document.querySelector("#load-screen");
var boot = document.querySelector("#boot-screen");
var Screencover = document.querySelector("#Screen-cover");
var input = document.querySelector("#Input-bar");

var reset = setInterval(refresh, 100);
loading = false;

function refresh(){input.focus();}


const dictionary = new Map();
// dictionary set //

//! dictionary.set("codeinlowercase", "destination.html");

dictionary.set("c:/help", "test1.html");

// -------------- //

load.style.display = "none";
load.style.height = "100%";

//\ variables /\

document.addEventListener('keydown', d => {

    if (d.repeat) { return }

    if(d.keyCode == 13 && loading == false)
    {
        collectForm();
    }
});

function collectForm()
{
    var entry = input.value.toLowerCase();

    let code = dictionary.get(entry);

    input.value = "";

    if(code == null || entry == "" || entry == null)
    {
        error();
        return;
    } 

    setTimeout(() => {loading = true; bootFunc(code);}, 300);

}

function bootFunc(code)
{
    Screencover.style.display = "block";
    Screencover.style.top = "0%";
    Screencover.style.height = "100%";
    unloadscreen();

    load.style.justifyContent = "space-between";
    load.style.flexDirection = "column";
    load.style.display = "flex";

    boot.style.display = "none";
                 
    loadsound = new Audio("Sounds/reading_floppy_disc.mp3");
    loadsound.play();

    setTimeout(() => {
        window.location = code;
        }, 6500);
}


function unloadscreen()
{
        setTimeout(() => {
            Screencover.style.top = "10%";
            Screencover.style.height = "90%";
        }, 100);

        setTimeout(() => {
            Screencover.style.top = "20%";
            Screencover.style.height = "80%";
        }, 200);

        setTimeout(() => {
            Screencover.style.top = "30%";
            Screencover.style.height = "70%";
        }, 300);

        setTimeout(() => {
            Screencover.style.top = "40%";
            Screencover.style.height = "60%";
            
        }, 400);
        
        setTimeout(() => {
            Screencover.style.top = "50%";
            Screencover.style.height = "50%";
            
        }, 500);

        setTimeout(() => {
            Screencover.style.top = "60%";
            Screencover.style.height = "40%";
        }, 600);

        setTimeout(() => {
            Screencover.style.top = "70%";
            Screencover.style.height = "30%";
        }, 700);

        setTimeout(() => {
            Screencover.style.top = "80%";
            Screencover.style.height = "20%";
        }, 800);

        setTimeout(() => {
            Screencover.style.top = "90%";
            Screencover.style.height = "10%";
            
        }, 900);
        
        setTimeout(() => {
            Screencover.style.display = "none"; 
            
        }, 1000);
}

function error()
{
    errtext.innerHTML = "Bad file or disk name"
    errsound.play();
    setTimeout(() => {errtext.innerHTML = ""}, 2000);
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
