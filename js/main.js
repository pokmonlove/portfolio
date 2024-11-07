//페이지 아래로 스크롤 시 header 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight=header.offsetHeight
console.log(headerHeight)
document.addEventListener('scroll', () => {

    if(window.scrollY>headerHeight){
        header.classList.add('header--dark')
    }
    else{
        header.classList.remove('header')
    }
})

// home  섹션을 아래로 스크롤 시 투명하게 처리
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
})

//arrow up 버튼을 아래로 스크롤 시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUp.style.opacity = 1
    }else{
        arrowUp.style.opacity=0
    }
})

//Navbar 토글 버튼 클릭 처리
const NavbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelector('.header__toggle')
navbarToggle.addEventListener('click', ()=>{
    NavbarMenu.classList.toggle('open')
})

//navebar 메뉴 클릭시 메뉴를 자동으로 닫아 줌
NavbarMenu.addEventListener('click',()=>{
    NavbarMenu.classList.toggle('open')
}

)