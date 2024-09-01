gsap.from("#img1",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60,
    scrub:2,
})
gsap.from("#img2",{
    opacity:0,
    duration:1,
    delay:0.4,
    x:120,
    scrub:2,
})
gsap.from("#img3",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:-60,
    scrub:2,
})
gsap.from("#page1 h1",{
    opacity:0,
       y:-50,
})
gsap.from("#page2 h5, #page2 h1, #page2 #about-us h4, #page2 #green-div",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        start:"top 60%",
    
        
    }
})
 
 