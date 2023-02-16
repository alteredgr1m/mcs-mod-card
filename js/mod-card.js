window.addEventListener("load", (event) => {
    const modCards = Array.from(document.querySelectorAll(".mod-card"));
    const colorThief = new ColorThief();

    modCards.forEach((card) => {
        const header = card.querySelector(".mod-card-header");
        const wrapper = header.querySelector(".mod-card-header-wrapper");
        const image = wrapper.querySelector("img");
        const values = colorThief.getColor(image);
        const [r, g, b] = values;
        const color = `${r}, ${g}, ${b}`;
        
        wrapper.style.background = `linear-gradient(0deg, rgba(${color}, 0.3), rgba(${color}, 0.3)), linear-gradient(90deg, rgba(${color}, 0) 35.07%, rgb(${color}) 86.59%)`;
    });
});
