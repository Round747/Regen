let ScreenCover = document.querySelector("#Screen-cover");

    window.onload = unloadScreen(); 


    function unloadScreen()
    {
        ScreenCover.style.display = "fixed";
        
        setTimeout(() => {
            ScreenCover.style.top = "10%";
            ScreenCover.style.height = "90%";
        }, 100);

        setTimeout(() => {
            ScreenCover.style.top = "20%";
            ScreenCover.style.height = "80%";
        }, 200);

        setTimeout(() => {
            ScreenCover.style.top = "30%";
            ScreenCover.style.height = "70%";
        }, 300);

        setTimeout(() => {
            ScreenCover.style.top = "40%";
            ScreenCover.style.height = "60%";
            
        }, 400);
        
        setTimeout(() => {
            ScreenCover.style.top = "50%";
            ScreenCover.style.height = "50%";
            
        }, 500);

        setTimeout(() => {
            ScreenCover.style.top = "60%";
            ScreenCover.style.height = "40%";
        }, 600);

        setTimeout(() => {
            ScreenCover.style.top = "70%";
            ScreenCover.style.height = "30%";
        }, 700);

        setTimeout(() => {
            ScreenCover.style.top = "80%";
            ScreenCover.style.height = "20%";
        }, 800);

        setTimeout(() => {
            ScreenCover.style.top = "90%";
            ScreenCover.style.height = "10%";
            
        }, 900);
        
        setTimeout(() => {
            ScreenCover.style.display = "none"; 
            
        }, 1000);
    }