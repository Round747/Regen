const audio = new Audio("Sounds/Keyboard-Button-Click.wav");
const audiolow = new Audio("Sounds/Keyboard-Button-Click low pitch.wav");
const audiolower = new Audio("Sounds/Keyboard-Button-Click lower pitch.wav");
const audiohigh = new Audio("Sounds/Keyboard-Button-Click high pitch.wav");
const audiohigher = new Audio("Sounds/Keyboard-Button-Click higher pitch.wav");
const errsound = new Audio("Sounds/beep.wav");

const list = [audio, audiolow, audiohigh, audiohigher, audiolower];

        var load = document.querySelector("#load-screen");
        var boot = document.querySelector("#boot-screen");
        var Screencover = document.querySelector("#Screen-cover");
        var input = document.querySelector("#Input-bar");
        var reset = setInterval(refresh, 100);
        var error = document.querySelector("#error");

        function refresh(){
            input.focus();
            
          }

        load.style.display = "none";
        load.style.height = "100%";

        loading = false;

        var text = document.querySelector("#text");

        document.addEventListener('keydown', e => {

            if (e.repeat) { return }

            if(e.keyCode == 13 && loading == false)
            {
                collectForm();
            }

            list[Math.floor(Math.random() * 4)].cloneNode().play();
        });

        function bootFunc()
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
                    window.location = localStorage.getItem("currentdiskname") + ".html";
                }, 6500);
        }


function collectForm()
{
  var entry = input.value.toLowerCase();

  input.value = "";

  if(entry == "" || entry == null) return;

    var request = new XMLHttpRequest();  
    request.open('GET', entry + ".html", true);

    request.onreadystatechange = function()
    {
      if (request.readyState === 4)
      {
        if (request.status === 404)
        {  
            error.innerHTML = "Bad file or disk name"
            errsound.play();
            setTimeout(() => {error.innerHTML = ""}, 2000);
        }
        else
        { 
          setTimeout(() => {loading = true; bootFunc();}, 300);
        }
      }
    };

    alert(request.response);

    request.send();
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