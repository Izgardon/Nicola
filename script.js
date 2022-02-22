const navBar = document.querySelector(".header")



window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    console.log(window.pageYOffset)

    if (currentScroll + 100 >= window.innerHeight) {
        navBar.classList.add('header-on-scroll')

    } else {
        navBar.classList.remove('header-on-scroll')
    }

})