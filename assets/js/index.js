function snadwich(e){
    e.parentNode.classList.toggle("active")
}
let links = document.querySelectorAll(".navigation__link")

for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.onclick = () => {
        document.querySelector(".navigation__wrapper").classList.remove("active")
    }
}