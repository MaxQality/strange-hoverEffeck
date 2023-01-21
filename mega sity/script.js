const navigation = document.querySelector('.nav')
const nav_links = document.querySelectorAll('.nav__link')
const nav_blocks = document.querySelectorAll('.nav__block')
const content_blocks = document.querySelectorAll('[data-content]')
const back = document.querySelector('.wrapper__back')


const handleDocumentLoaded = (event)=>{
    const hash = event.target.location.hash
    content_blocks.forEach((block)=>{
        if (`#${block.id}` === hash) {
            navigation.style.display = 'none'
            block.dataset.content = 'visible' 
        }
    })
}

const handleNavLinkClick = (event)=>{
    const hash = event.target.hash
    content_blocks.forEach((block)=>{
        if (`#${block.id}` === hash) {
            navigation.style.display = 'none'
            block.dataset.content = 'visible' 
        }
    }
  )
}

const handleNavBlockMouseMove = (event) =>{
    event.stopPropagation()
    const {clientX, clientY, currentTarget: block} = event
    const link = block.lastChild
    const {offsetTop, offsetLeft, clientHeight, clientWidth} = block
    let x = clientX - (offsetLeft +clientWidth / 2)
    let y = clientY - (offsetTop + clientHeight / 2)

    link.style.transform = `translate(${x}px, ${y}px)`;
    block.style.transform = `skew(${x/5}deg, ${y/5}deg)`;
}

const handleNavBlockMouseLeave = (event) => {
    event.stopPropagation()
    const {currentTarget: block} = event
    const link = block.lastChild

    link.style.transform = `translate(0, 0)`;
    block.style.transform = `skew(0, 0)`;
}

nav_links.forEach((link)=>link.addEventListener('click', handleNavLinkClick))
nav_blocks.forEach((link)=>link.addEventListener('mousemove', handleNavBlockMouseMove))
nav_blocks.forEach((link)=>link.addEventListener('mouseleave', handleNavBlockMouseLeave))



document.addEventListener('DOMContentLoaded', handleDocumentLoaded)
