const colors =  ['red','green','grey','black','purple','pink','cyan','blue','yellow']
const color = document.querySelector('.color')
const btn = document.querySelector('button')
const popUpText = document.querySelector('.pop-up')
const title = document.querySelector('.title')



window.addEventListener('keydown', function(key){
    if (key.keyCode == '32'){
        color.innerHTML = colors[getRandomNumber()]
        document.body.style.background = color.innerHTML
        popUpText.style.display = "none"
    }
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}