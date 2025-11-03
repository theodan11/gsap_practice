const reloadBtn = document.querySelector("#reloadBtn")

const  box1Animation = gsap.to(".box1", {
    opacity: 1,
    scale: 1,
    duration: 2,
    y: 100,
    x: 300,
    borderRadius: "100%",
    backgroundColor: "#4657bbff",
    yoyo: true,
    repeat: -1,
    ease: "bounce.out"
})

const box2Animation = gsap.to(".box2",{
    opacity: 1,
    scale: 1.2,
    x: -400, 
    y: 20, 
    ease: "power2.out",
    yoyo: true, 
    repeat: 3
})


reloadBtn.addEventListener("click", () => {
    box1Animation.restart()
    box2Animation.restart()
})