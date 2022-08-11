let color =document.querySelector(".color");
let car = document.querySelector(".car");
let head_car= document.querySelector(".head_car")

let block = document.querySelectorAll(".block");

  for(let i=0; i<block.length; i++) {
    block[i].addEventListener('click', ()=> {
      let colorBlock = window.getComputedStyle(block[i]).backgroundColor;
      car.style.backgroundColor = colorBlock;
      head_car.style.backgroundColor = colorBlock;
    })
    
}


color.addEventListener("input", ()=> {
  car.style.background = color.value;
})
const colorx = document.querySelector("button")
  colorx.addEventListener("click", ()=> {
    head_car.style.background = color.value;
})
    





// const colorx = document.querySelector("button")
// colorx.addEventListener("click", ()=>{
//   color.addEventListener("input", ()=>{
//     head_car.style.background = color.value;
//   })
  
//})

