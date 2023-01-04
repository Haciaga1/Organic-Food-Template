let fistBlock = document.querySelector('#fist-block')
let secondBlock = document.querySelector('#second-block')
let thirdBlock = document.querySelector('#third-block')

let popup = document.querySelector('#popup1')
let popup2 = document.querySelector('#popup2')
let popup3 = document.querySelector('#popup3')

let clsoeBtn = document.querySelector('#close-btn-1')
let clsoeBtn2 = document.querySelector('#close-btn-2')
let clsoeBtn3 = document.querySelector('#close-btn-3')


fistBlock.addEventListener('click',(e)=>{
    popup.classList.toggle('bg-active')
})
popup.addEventListener('click',(e)=>{
    popup.classList.toggle('bg-active')
})


secondBlock.addEventListener('click',(e)=>{
    popup2.classList.toggle('bg-active')
})
popup2.addEventListener('click',(e)=>{
    popup2.classList.toggle('bg-active')
})


thirdBlock.addEventListener('click',(e)=>{
    popup3.classList.toggle('bg-active')
})
popup3.addEventListener('click',(e)=>{
    popup3.classList.toggle('bg-active')
})