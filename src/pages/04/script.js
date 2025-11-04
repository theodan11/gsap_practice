const upBtn = document.querySelector(".upBtn")

let isFloating = false

window.addEventListener('scroll',()=>{
    if( window.scrollY > 500){
        upBtn.classList.add('show')
          if(!isFloating){
            gsap.to(upBtn, {
                y: -10,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: "sine.inOut"

            })

            isFloating = true
        }
    }else{
        upBtn.classList.remove("show")
    }

    upBtn.addEventListener("click",()=>{
        window.scrollTo(0,0)

      
    })

})