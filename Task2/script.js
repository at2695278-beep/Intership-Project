let cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.x+30 +"px"
    cursor.style.top = e.y+"px"
})
// let h4s = document.querySelectorAll(".nav h4")
// h4s.forEach(function(elem) {
//     elem.addEventListener("mouseenter",function(){
//     cursor.style.scale = 5
//     cursor.style.border = "1px solid white"
//     cursor.style.backgroundColor = "transparent"
// })
// elem.addEventListener("mouseleave",function(){
//     cursor.style.scale = 1
//     cursor.style.border = "0px solid #b0e915"
//     cursor.style.backgroundColor = "#b0e915"})

// });
gsap.to(".nav",{
    backgroundColor : "black",
    height : "80px",
    duration : 0.5,
    scrollTrigger : {
        trigger : ".nav",
        scroll : "body",
        start : "top -10%",
        end : "top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor : "black",
    scrollTrigger: {
        trigger : ".main",
        start : "top -30%",
        end : "top -80%",
        scrub:2
    }
})

gsap.from(".about-us img , .about-us-in",{
    y:50,
    opacity : 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger :".about-us",
        scroller:"body",
        start:"top 55%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity : 0,
    duration: 1,
    scrollTrigger:{
        trigger :".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 68%",
        scrub:2
    }
})

gsap.from(".commatop",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub: 7
    }
})

gsap.from(".commabottom",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub: 7
    }
})

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub: 3
    }
})