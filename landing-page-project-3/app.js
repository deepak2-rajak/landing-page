let cursor=document.querySelector("#cursor");
let main=document.querySelector("#main");
let img=document.querySelector("img");
// let h1=document.querySelector("#scroll-div2 h1");
let text=document.querySelector("#main #text");
let overlay=document.querySelector("#overlay");
 
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})
overlay.addEventListener("mouseenter",function(){
cursor.innerHTML="view more";
 cursor.style.backgroundColor="red";
gsap.to(cursor,{
    scale:1.5,
})
})
 overlay.addEventListener("mouseleave",function(){
     cursor.innerHTML="";
     cursor.style.backgroundColor="black";
    gsap.to(cursor,{
         scale:1,

    })
})
 
text.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more";
     cursor.style.backgroundColor="red";
    gsap.to(cursor,{
        scale:1.5,
    })
})
