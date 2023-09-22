
let landingtxt1 = document.querySelector('.landing-text-1')
let landingimg1 = document.querySelector('.landing-image-1')
let landingtxt2 = document.querySelector('.landing-text-2')
let landingimg2 = document.querySelector('.landing-image-2')
let leftbtn = document.querySelector(".left-button")
let rightbtn = document.querySelector(".right-button")
let returnbtn = document.querySelector('.return-btn')


leftbtn.addEventListener('click', ()=>{
    landingtxt1.style.transform = 'translate(1500px,0px)'
    landingimg1.style.transform = 'translate(-1500px,0px)'
    leftbtn.style.opacity = 0
    rightbtn.style.opacity = 1
    returnbtn.style.opacity = 1
})

returnbtn.addEventListener('click', ()=>{
    landingtxt1.style.transform = 'translate(0px,0px)'
    landingimg1.style.transform = 'translate(0px,0px)'
    leftbtn.style.opacity = 1
    rightbtn.style.opacity = 1
})

rightbtn.addEventListener('click', ()=>{
    landingtxt1.style.transform = 'translate(-1500px,0px)'
    landingimg1.style.transform = 'translate(1500px,0px)'
    rightbtn.style.opacity = 0
    leftbtn.style.opacity = 1
    returnbtn.style.opacity = 1
})
