const reloadBtn = document.querySelector("#reloadBtn")

let gsapController = gsap.to(".box1", {
    opacity: 1,
    scale: 1,
    duration: .3,
    onComplete: () => {
        gsap.to(".box1", {
            y: 20,
            repeat: -1,
            yoyo: true,
            delay: .3
        })
    }
})


reloadBtn.addEventListener("click", () => {
    gsapController.restart()
})