const slider=document.querySelectorAll('.slide')    
const left=document.getElementById('left')
const right=document.getElementById('right')
const body=document.body
let activeSlide=0
console.log(left,right);
function backg() {
    if (slider.length > 0) {
        body.style.backgroundImage = slider[activeSlide].style.backgroundImage;
      }
}
backg()


function setActive() {
    slider.forEach((slide)=>{
        slide.classList.remove('active')
    })
    slider[activeSlide].classList.add('active')
}
right.addEventListener('click',()=> {
    activeSlide++;
    if (activeSlide>slider.length-1) {
        activeSlide=0
    }
    backg()
    setActive()
})
left.addEventListener('click',()=> {
    activeSlide--;
    if (activeSlide<0) {
        activeSlide=slider.length-1
    }
    backg()
    setActive()
})