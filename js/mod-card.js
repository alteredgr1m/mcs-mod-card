const modCards = Array.from(document.querySelectorAll(".mod-card"));
const colorThief = new ColorThief();

modCards.forEach((card) => {
    const header = card.querySelector(".mod-card-header");
    const wrapper = header.querySelector(".mod-card-header-wrapper");
    const refImage = wrapper.querySelector("img");
    const color = colorThief.getColor(refImage);
    const [r, g, b] = color;
    
    wrapper.style.background = `linear-gradient(0deg, rgba(${r}, ${g}, ${b}, 0.3), rgba(${r}, ${g}, ${b}, 0.3)), linear-gradient(90deg, rgba(${r}, ${g}, ${b}, 0) 35.07%, rgb(${r}, ${g}, ${b}) 86.59%)`;
});