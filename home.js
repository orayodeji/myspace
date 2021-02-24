const nav = document.querySelector('ul');
const logo = document.querySelector('.logo')
const summary = document.querySelector('.summary')
const tools = document.querySelector('.tools')
const title = document.querySelector('h1')
const cB = document.querySelector('.contact-box')
const fB = document.querySelector('.projects-folder')
const fBH2 = document.querySelector('.pr-h2')

const tl = new TimelineMax();

tl.fromTo(summary, 1.0, {y : "50", opacity:0}, {y:0, opacity: 1})
.fromTo(tools, 2.5, {y: "-50", opacity:0}, {y:0, opacity:1})
.fromTo(nav, 3.0,{y:"50",opacity: 0}, {y:0, opacity:1})
.fromTo(logo, 1.0,{y:"-50",opacity: 0}, {y:0, opacity:1}, '-=2.0')



const sT = gsap.timeline({
    scrollTrigger: {
      trigger: ".last-part",
      start: "top center",
      end: "center top",
      scrub: true,
      
    }
})

const mP = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top center",
      end: "center top",
      scrub: true,
      
    }
})

sT.fromTo(cB, 1.0, {y : "-90", opacity:0}, {y:0, opacity: 1})
mP.fromTo(fB, 1.0, {y : "90", opacity:0.4}, {y:0, opacity: 1})

//sT.from(cB,{x: 200, opacity: 1, duration: 1.5})

//mP.from(fB,{x: 200, opacity: 0, duration: 1.5})
//.fromTo('.projects', 1.0, {y : "-90", opacity:0}, {y:0, opacity: 1})

/*

gsap.to(cB, {
    scrollTrigger:{
        trigger: cB,
        start: 'top center',
        pin: true,
        
    }, // start the animation when ".box" enters the viewport (once)
    x: 500
});
*/

//.fromTo(logo, 3.5, {y:'-130%'}, {y: '0%', ease: Power2.easeIn}, '-=4.0')


/*
tl.fromTo(nav, 3.5, {x: '110%'}, {x: '0%', ease: Power2.easeIn})
.fromTo(logo, 1.5, {y:'-120%'}, {y: '0%', ease: Power2.easeIn}, '-=3.0')
.fromTo(summary, 2.5, {x:'-150%', opacity: 0}, {x: '0%', ease: Power2.easeIn, opacity: 1}, '-=1.0.')
.fromTo(tools, 7.5, {x:'150%'}, {x: '0%', ease: Power2.easeIn}, '-=2.0.')
*/

const btn = document.querySelector(".line");
const puke = document.getElementById('nav')

btn.addEventListener("click", () => {  
    puke.classList.toggle("active");
});

