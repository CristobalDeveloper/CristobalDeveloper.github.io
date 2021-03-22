const navMenu = document.getElementById('nav-menu'),
    toogleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


toogleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})



closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }
        else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}
