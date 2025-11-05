const tabs = document.querySelectorAll(".tab")
const tabRows = document.querySelector(".tabRows")
const indicator = document.querySelector(".indicator")


const handleIndicator = (target)=>{
   const tabBoundingBox = target.getBoundingClientRect();
   const rowBoundingBox = tabRows.getBoundingClientRect();
   const tabWidth = tabBoundingBox.width
   const offset = tabBoundingBox.left - rowBoundingBox.left

   gsap.to(indicator, {
    x: offset, 
    duration:0.4,
    width: tabWidth,
    ease: "back.out(1.7)"
   })

}
tabs.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
        handleIndicator(tab)
        tabs.forEach((t)=>{t.classList.remove("active")})
        tab.classList.add("active")
    })
})
