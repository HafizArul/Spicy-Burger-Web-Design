// Auto margin header section
const navElement = document.querySelector("nav.navbar");
const heroSection = document.querySelector("header.hero");

window.addEventListener("resize", () => {
    const navAutoMargin = navElement.clientHeight;
    heroSection.style.setProperty('--header-auto-margin', `calc(${navAutoMargin}px + 12px)`);
    console.log(navAutoMargin);
});