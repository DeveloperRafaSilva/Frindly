export default function menuMobile(){
    const menuMobileImg = document.querySelector("[data-menu-mobile-img]")
    const dataLinksMenuMobile = document.querySelector("[data-links-menu-mobile]")

    menuMobileImg.addEventListener("click",() =>{
        dataLinksMenuMobile.classList.toggle('on')
    })

}