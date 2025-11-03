const reloadBtn = document.querySelector("#reloadBtn")



const playBtn = document.querySelector(".playBtn")
const pauseBtn = document.querySelector(".pauseBtn")
const ResumeBtn = document.querySelector(".ResumeBtn")
const ReverseBtn = document.querySelector(".ReverseBtn")
const restartBtn = document.querySelector(".restartBtn")
const killBtn = document.querySelector(".killBtn")
const yoyoBtn = document.querySelector(".yoyoBtn")

const repeatBtn = document.querySelector(".repeatBtn")

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

playBtn.addEventListener("click", ()=>{
    box1Animation.play()
})
pauseBtn.addEventListener("click", ()=>{
    box1Animation.pause()
})
ResumeBtn.addEventListener("click", ()=>{
box1Animation.resume()
})
ReverseBtn.addEventListener("click", ()=>{
box1Animation.reverse()
})
restartBtn.addEventListener("click", ()=>{
box1Animation.restart()
})
killBtn.addEventListener("click", ()=>{
box1Animation.kill()
})
yoyoBtn.addEventListener("click", ()=>{
box1Animation.yoyo(true)
})


repeatBtn.addEventListener("click",()=>{
    box1Animation.repeat(1)
})

reloadBtn.addEventListener("click", () => {
    box1Animation.restart()
})