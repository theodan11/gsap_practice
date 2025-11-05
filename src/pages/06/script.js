

const chartContainter = document.getElementById("chart")

const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];

const maxValue = Math.max(...data.map((d)=>d.value))
const barWidth = 50
const spacing = 25
const chartHeight = chartContainter.clientHeight

const render = ()=>{
    data.forEach((item, i)=>{

    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`
    wrapper.style.width = `${barWidth}px`

    const bar = document.createElement("div")
    bar.className = 'bar'
    const barHeight = (item.value / maxValue ) * (chartHeight - 60)
  
    bar.style.height = `${barHeight}px`

    const label = document.createElement("div")
    label.className = "label"
    label.textContent = item.label

    wrapper.appendChild(bar)
    wrapper.appendChild(label)
    chartContainter.appendChild(wrapper)

    gsap.to(".bar", {
        scaleY: 1,
        duration: 3,
        ease: "back.out"
    })
})


}

render()