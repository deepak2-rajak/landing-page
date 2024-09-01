let overlay=document.querySelector("#top");
let text=document.querySelector(".text");
overlay.addEventListener("mouseenter",function(){
text.classList.remove("hide2");

        gsap.from("#overlay h1",{
            opacity:0,
            
            duration:0.9,
            x:-200,
        })
        gsap.from("#overlay #text-right",{
            opacity:0,
            
            duration:0.9,
            y:-200,
        })

})

 
 